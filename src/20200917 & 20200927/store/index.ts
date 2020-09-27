import { combineReducers, createStore, applyMiddleware } from 'redux'
import count from './reducer'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'

const reducer = combineReducers({
  count,
})

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(saga)

export interface IStore {
  count: {
    num: number
  }
}
