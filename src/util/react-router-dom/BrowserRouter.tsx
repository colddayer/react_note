import React from 'react'
import { RouterContext } from './context'

export default class BrowserRouter extends React.Component {
  state = {
    location: { pathname: window.location.hash.slice(1), state: null },
    history: {
      push: (to: string | { pathname: string; state?: any }) => {
        if (typeof to === 'string') {
          window.history.pushState(null, '', to)
        } else {
          window.history.pushState(to.state, '', to.pathname)
        }
      },
    },
  }
  componentDidMount() {
    window.onpopstate = (e: PopStateEvent) => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.pathname,
          state: e.state,
        },
      })
    }
    const pushState = window.history.pushState
    window.history.pushState = (state, title, url) => {
      pushState.call(window.history, state, title, url)
      this.setState({
        location: {
          ...this.state.location,
          pathname: url,
          state: state,
        },
      })
    }
  }
  render() {
    const { children } = this.props
    return <RouterContext.Provider value={this.state}>{children}</RouterContext.Provider>
  }
}
