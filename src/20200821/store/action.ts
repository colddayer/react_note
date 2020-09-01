import { bindActionCreators } from '../../util/redux/bindActionCreators'
import { store } from '.'
import { Dispatch } from 'redux'

export const count1 = {
  ADD: () => {
    return { type: 'ADD' }
  },
  SUBSTRACT: () => {
    return { type: 'SUBSTRACT' }
  },
  ADD_ASYNC: () => {
    return (dispatch: Dispatch) => {
      setTimeout(() => {
        console.log('正在等待!')
        dispatch({ type: 'ADD' })
      }, 1000)
    }
  },
  ADD_ASYNC_PROMISE: () => {
    return {
      type: 'ADD',
      payload: new Promise((rsv, rjt) => {
        setTimeout(() => {
          const result = Math.random()
          console.log('this is a promise')
          result > 0.5 ? rsv(result) : rjt(result)
        }, 1000)
      }),
    }
  },
}

export const count2 = {
  ADD: () => {
    return { type: 'ADD1' }
  },
  SUBSTRACT: () => {
    return { type: 'SUBSTRACT1' }
  },
}

export const dispatchCount1 = bindActionCreators(count1, store.dispatch)
export const dispatchCount2 = bindActionCreators(count2, store.dispatch)
