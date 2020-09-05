import { Reducer, combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from '../../history'

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
