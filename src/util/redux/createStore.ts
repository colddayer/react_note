import { Redux } from './type'
import ActionTypes from './actionTypes'

export default function createStore<State, Action extends Redux.IAction>(
  reducer: Redux.Reducer<State | undefined>,
  initState?: State
) {
  const currentReducer = reducer
  let currentState = initState
  const currentListeners: Array<Function> = []

  const getState = () => currentState!

  const subscribe = (listener: Function) => {
    let isSubscribe = true
    currentListeners.push(listener)

    return function unSubscribe() {
      if (!isSubscribe) return
      const index = currentListeners.indexOf(listener)
      currentListeners.splice(index, 1)
      isSubscribe = false
    }
  }

  const dispatch = (action: Action) => {
    currentState = currentReducer(currentState, action)
    for (const i of currentListeners) {
      i()
    }
  }

  dispatch({ type: ActionTypes.INIT } as Action)

  return {
    getState,
    subscribe,
    dispatch,
  }
}
