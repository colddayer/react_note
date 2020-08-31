import { Redux } from './type'

export function combineReducers(reducers: Redux.ReducerMap) {
  const keys = Object.keys(reducers)
  const combineReducer: Redux.Reducer = function (state = {}, action) {
    const nextState: any = {}
    for (const key of keys) {
      nextState[key] = reducers[key](state[key], action)
    }
    return nextState
  }
  return combineReducer
}
