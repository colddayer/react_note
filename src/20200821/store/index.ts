import createStore from '../../util/redux/createStore'
import { count1, count2 } from './reducer'
import { combineReducers } from '../../util/redux/combineReducers'

export const store = createStore<IStore>(
  combineReducers({
    count1,
    count2,
  })
)

export interface IStore {
  count1: number
  count2: number
}
