import { Middleware, StoreCreator, Reducer, MiddlewareAPI, Dispatch, compose } from 'redux'
export default function appMiddleware(...middleware: Middleware[]) {
  return function (createStore: StoreCreator) {
    return function (reducer: Reducer) {
      const store = createStore(reducer)
      let dispatch: Dispatch = (action) => {
        console.log('还没准备好!')
        return action
      }
      const middlewareAPI: MiddlewareAPI = {
        getState: store.getState,
        dispatch: (action) => dispatch(action),
      }
      const chain = middleware.map((middleware) => middleware(middlewareAPI))
      dispatch = compose<Dispatch>(...chain)(store.dispatch)
      return {
        ...store,
        dispatch,
      }
    }
  }
}
