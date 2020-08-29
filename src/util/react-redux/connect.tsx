import { Redux } from '../redux/type'
import React from 'react'
import { bindActionCreators } from '../redux/bindActionCreators'
import { ReduxContext } from './Provider'

export type MapProps<Props = any> = (state: Props) => Props

export function connect(mapProps: MapProps, mapDispatch?: Redux.ActionCreatorMap) {
  return function wrapComponent(WrapComponent: React.ComponentClass<any>) {
    return class extends React.Component {
      constructor(props = {}, context: React.ContextType<typeof ReduxContext>) {
        super(props)
        this.state = mapProps(context?.getState())
      }
      static contextType = ReduxContext
      declare context: React.ContextType<typeof ReduxContext>
      declare unSubscribe: Function
      componentDidMount() {
        this.unSubscribe = this.context!.subscribe(() =>
          this.setState({ count1: this.context!.getState().count1 })
        )
      }
      componentWillUnmount() {
        this.unSubscribe()
      }
      render() {
        return (
          <WrapComponent
            {...this.state}
            {...bindActionCreators(mapDispatch, this.context!.dispatch)}
          />
        )
      }
    }
  }
}
