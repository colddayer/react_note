import React, { Component } from 'react'
import { Router } from 'react-router-dom'
import { History } from 'history'
import { LOCATION_CHANGE } from './constant'
import { ReactReduxContext } from 'react-redux'

export default class ConnectedRouter extends Component<{
  history: History
}> {
  static contextType = ReactReduxContext
  declare context: React.ContextType<typeof ReactReduxContext>
  declare unlisten: Function

  componentDidMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      this.context.store.dispatch({
        type: LOCATION_CHANGE,
        payload: {
          location,
          action,
        },
      })
    })
  }

  componentWillMount() {
    this.unlisten()
  }

  render() {
    const { history, children } = this.props
    return <Router history={history}>{children}</Router>
  }
}
