import React from 'react'
import { Provider, connect } from 'react-redux'
import { store, IStore } from './store'
import { MapProps } from '../util/react-redux/connect'
import { count } from './store/action'
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
  ADD_ASYNC: Redux.Dispatch
}
class Count extends React.Component<IProps> {
  render() {
    const { count, ADD, SUBSTRACT, ADD_ASYNC } = this.props
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    const r = window.location.search.substr(1).match(reg)
    console.log(r)

    return (
      <>
        <div>{count.num}</div>
        <button onClick={ADD}>+</button>
        <button onClick={SUBSTRACT}>-</button>
        <button onClick={ADD_ASYNC}>async</button>
      </>
    )
  }
}
const mapProps: MapProps<IStore> = (store) => store
const WrapCount = connect(mapProps, count)(Count)

export default Page
