import { Redux } from '../redux/type'
import React from 'react'
import { bindActionCreators } from '../redux/bindActionCreators'
import { ReduxContext } from './Provider'

export function connect(
  mapProps?: <Props = any>(state: Props) => Props,
  mapDispatch?: Redux.ActionCreatorMap
) {
  return function wrapComponent(WrapComponent: React.ComponentClass) {
    return class extends React.Component {
      constructor(props = {}) {
        super(props)
        // this.state
      }
      static contextType = ReduxContext
      declare context: React.ContextType<typeof ReduxContext>
      render() {
        return (
          <WrapComponent
            {...mapProps}
            {...bindActionCreators(mapDispatch, this.context?.dispatch!)}
          />
        )
      }
    }
  }
}
