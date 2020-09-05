import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer/counter'
import { routerMiddleware, RouterState } from 'connected-react-router'
import history from '../history'

const store = createStore(reducer, applyMiddleware(routerMiddleware(history)))

export type IStore = {
  counter: { num: number }
  router: RouterState
}
export default store
