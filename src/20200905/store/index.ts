import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer/counter'
import { RouterState } from 'connected-react-router'
import history from '../history'
import { routerMiddleware } from '../../util/connected-react-router/routerMiddleware'

const store = createStore(reducer, applyMiddleware(routerMiddleware(history)))

export type IStore = {
  counter: { num: number }
  router: RouterState
}
export default store
