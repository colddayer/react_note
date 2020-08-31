import { Middleware } from 'redux'

export const mid1: Middleware = ({ getState }) => (dispatch) => (action) => {
  console.log('mid1 begin now state is ', getState())
  dispatch(action)
  console.log('mid1 end now state is', getState())
}

export const mid2: Middleware = () => (dispatch) => (action) => {
  console.log('mid2 begin')
  dispatch(action)
  console.log('mid2 end')
}
