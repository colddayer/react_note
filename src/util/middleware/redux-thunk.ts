import { Middleware } from 'redux'

function createThunkMiddleWare(): Middleware {
  return ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === 'function') {
      action(dispatch, getState)
    } else {
      next(action)
    }
  }
}

export const thunk = createThunkMiddleWare()
