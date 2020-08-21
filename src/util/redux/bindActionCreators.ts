import { Redux } from './type'

function bindActionCreator(actionCreator: Redux.ActionCreator, dispatch: Redux.Dispatch) {
  return function (this: any, ...args: any[]) {
    return dispatch(actionCreator.apply(this, args))
  }
}

export function bindActionCreators(
  actionCreators: Redux.ActionCreator | Redux.ActionCreatorMap,
  dispatch: Redux.Dispatch
) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch)
  }

  const bindObj: Redux.ActionCreatorMap = {}
  const keys = Object.keys(actionCreators)

  for (const key of keys) {
    bindObj[key] = bindActionCreator(actionCreators[key], dispatch)
  }

  return bindObj
}
