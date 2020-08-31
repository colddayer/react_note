import { createStore } from 'redux'
import { count1, count2 } from '../20200821/store/reducer'
import { combineReducers } from '../util/redux/combineReducers'
import applyMiddleware from '../util/redux/applyMiddleware'
import { mid1, mid2 } from './logger'

const reducer = combineReducers({
  count1,
  count2,
})

export const store = applyMiddleware(mid1, mid2)(createStore)(reducer)

export interface IStore {
  count1: number
  count2: number
}
