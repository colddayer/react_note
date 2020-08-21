import React from 'react'
import { store } from './store'
import { dispatchCount1, dispatchCount2 } from './store/action'

interface IState {
  count1: number
  count2: number
}

export default class Page extends React.Component<any, IState> {
  state: IState = {
    count1: store.getState().count1,
    count2: store.getState().count2,
  }

  unSubscribe1: Function = () => {}
  unSubscribe2: Function = () => {}

  componentDidMount() {
    this.unSubscribe1 = store.subscribe(() => this.setState({ count1: store.getState().count1 }))
    this.unSubscribe2 = store.subscribe(() => this.setState({ count2: store.getState().count2 }))
  }

  componentWillUnmount() {
    this.unSubscribe1()
    this.unSubscribe2()
  }

  render() {
    const { count1, count2 } = this.state
    return (
      <>
        <div>{count1}</div>
        <button onClick={dispatchCount1.ADD}>+</button>
        <button onClick={dispatchCount1.SUBSTRACT}>-</button>
        <div>{count2}</div>
        <button onClick={dispatchCount2.ADD}>+</button>
        <button onClick={dispatchCount2.SUBSTRACT}>-</button>
      </>
    )
  }
}
