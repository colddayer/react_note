import { createStore, applyMiddleware } from 'redux'
import { count1, count2 } from '../20200821/store/reducer'
import { combineReducers } from '../util/redux/combineReducers'
import { thunk } from '../util/middleware/redux-thunk'
import { mid1, mid2 } from '../20200831/logger'
import { promiseMiddleware } from '../util/middleware/redux-promise'

const reducer = combineReducers({
  count1,
  count2,
})

export const store = applyMiddleware(thunk, promiseMiddleware, mid1, mid2)(createStore)(reducer)

export interface IStore {
  count1: number
  count2: number
}
