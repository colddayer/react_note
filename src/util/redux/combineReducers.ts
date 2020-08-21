import { Redux } from './type'

export function combineReducers(reducers: Redux.ReducerMap) {
  const keys = Object.keys(reducers)

  const nextState: any = {}
  const combineReducer: Redux.Reducer = function (state, action) {
    for (const key of keys) {
      nextState[key] = reducers[key](state[key], action)
    }
    return nextState
  }
  return combineReducer
}
