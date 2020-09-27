import { Reducer } from 'redux'

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

export default counter
