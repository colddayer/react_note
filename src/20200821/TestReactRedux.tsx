import React from 'react'
import Provider from '../util/react-redux/Provider'
import { store, IStore } from './store'
import { connect, MapProps } from '../util/react-redux/connect'
import { count1 } from './store/action'
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
}
class Count extends React.Component<IProps> {
  render() {
    const { count1, ADD, SUBSTRACT } = this.props
    return (
      <>
        <div>{count1}</div>
        <button onClick={ADD}>+</button>
        <button onClick={SUBSTRACT}>-</button>
      </>
    )
  }
}
const mapProps: MapProps<IStore> = (store) => store
const WrapCount = connect(mapProps, { ...count1 })(Count)

export default Page
