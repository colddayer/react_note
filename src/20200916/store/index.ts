import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer/counter'
import { RouterState } from 'connected-react-router'
import history from '../history'
import { routerMiddleware } from '../../util/connected-react-router/routerMiddleware'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

export const store = createStore(
  persistReducer(persistConfig, reducer),
  applyMiddleware(routerMiddleware(history))
)
export const persistor = persistStore(store)

export type IStore = {
  counter: { num: number }
  router: RouterState
}
// @ts-ignore
window.store = store
