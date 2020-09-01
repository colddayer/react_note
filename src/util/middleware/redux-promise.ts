import { Middleware } from 'redux'

const isPromise = (obj: object) => obj instanceof Promise
export const promiseMiddleware: Middleware = ({ dispatch, getState }) => (next) => (action) => {
  return isPromise(action.payload)
    ? action.payload
        .then((res: any) => dispatch({ ...action, payload: res }))
        .catch((err: any) => dispatch({ ...action, payload: err, error: true }))
    : next(action)
}
