import { Redux } from '../../util/redux/type'

export const count1: Redux.Reducer = (state = 10, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'SUBSTRACT':
      return state - 1
    default:
      return state
  }
}

export const count2: Redux.Reducer = (state = 5, action) => {
  switch (action.type) {
    case 'ADD1':
      return state + 1
    case 'SUBSTRACT1':
      return state - 1
    default:
      return state
  }
}
