import { Reducer, combineReducers } from 'redux'
import history from '../../history'
import connectRouter from '../../../util/connected-react-router/connectRouter'

const counter: Reducer = (state = { num: 0 }, action) => {
  switch (action.type) {
    case 'ADD':
      return { num: state.num + 1 }
    case 'SUBSTRACT':
      return { num: state.num - 1 }
    default:
      return state
  }
}

export default combineReducers({
  router: connectRouter(history),
  counter,
})
