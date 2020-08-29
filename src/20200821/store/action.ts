import { bindActionCreators } from '../../util/redux/bindActionCreators'
import { store } from '.'

export const count1 = {
  ADD: () => {
    return { type: 'ADD' }
  },
  SUBSTRACT: () => {
    return { type: 'SUBSTRACT' }
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
