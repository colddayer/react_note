import React from 'react'
import { Provider, connect } from 'react-redux'
import { store, IStore } from './store'
import { MapProps } from '../util/react-redux/connect'
import { count1 } from '../20200821/store/action'
import { Redux } from '../util/redux/type'
class Page extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <WrapCount />
      </Provider>
    )
  }
}

interface IProps extends IStore {
  ADD: Redux.Dispatch
  SUBSTRACT: Redux.Dispatch
  ADD_ASYNC: Function
  ADD_ASYNC_PROMISE: Redux.Dispatch
}
class Count extends React.Component<IProps> {
  render() {
    const { count1, ADD, SUBSTRACT, ADD_ASYNC, ADD_ASYNC_PROMISE } = this.props
    return (
      <>
        <div>{count1}</div>
        <button onClick={ADD}>+</button>
        <button onClick={SUBSTRACT}>-</button>
        <button onClick={() => ADD_ASYNC()}>timeout加1</button>
        <button onClick={ADD_ASYNC_PROMISE}>promise加1</button>
      </>
    )
  }
}
const mapProps: MapProps<IStore> = (store) => store
const WrapCount = connect(mapProps, { ...count1 })(Count)

export default Page
