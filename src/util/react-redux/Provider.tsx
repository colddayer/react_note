import React from 'react'
import { Redux } from '../redux/type'

export const ReduxContext = React.createContext<Redux.Store | null>(null)

interface IProps {
  store: Redux.Store
}
export default class Provider extends React.Component<IProps> {
  render() {
    const { children, store } = this.props
    return <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
  }
}
