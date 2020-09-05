import { Middleware } from 'redux'
import { CALL_HISTORY_METHOD } from './constant'
import { History } from 'history'

export const routerMiddleware: (history: History) => Middleware = (history) => ({
  getState,
  dispatch,
}) => (next) => (action) => {
  if (action.type === CALL_HISTORY_METHOD) {
    const { method, path } = action.payload
    history[method](path)
  } else {
    next(action)
  }
}
