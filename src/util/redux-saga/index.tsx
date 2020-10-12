import { Middleware } from 'redux'
import { access } from 'fs'

export default function createSagaMiddleware(): Middleware {
  return ({ dispatch, getState }) => (next) => (action) => {}
}
