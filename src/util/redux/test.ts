import createStore from './createStore'
import { Redux } from './type'

const reducer = (state = 0, action: Redux.IAction) => {
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'SUBTRACT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(reducer)

const listenerA = {
  count: 0,
  getCount: function () {
    console.log('listenerA count is' + listenerA.count)
  },
  setCount: function () {
    listenerA.count += store.getState()
    listenerA.getCount()
  },
}

const listenerB = {
  count: 3,
  getCount: function () {
    console.log('listenerB count is' + listenerB.count)
  },
  setCount: function () {
    listenerB.count *= store.getState()
    listenerB.getCount()
  },
}

store.subscribe(listenerA.setCount)
store.subscribe(listenerB.setCount)

setTimeout(() => {
  store.dispatch({ type: 'ADD' })
}, 100)

setTimeout(() => {
  store.dispatch({ type: 'SUBTRACT' })
}, 200)
