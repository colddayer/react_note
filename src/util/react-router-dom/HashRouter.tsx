import React from 'react'
import { RouterContext } from './context'

export default class HashRouter extends React.Component {
  state = {
    location: { pathname: window.location.hash.slice(1), state: null },
    history: {
      push: (to: string | { pathname: string; state?: any }) => {
        if (typeof to === 'string') {
          window.location.hash = to
        } else {
          window.location.hash = to.pathname
          this.locationState = to.state
        }
      }
    }
  }
  locationState: any
  componentDidMount() {
    window.location.hash = window.location.hash || '/'
    window.addEventListener('hashchange', () => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1),
          state: this.locationState
        }
      })
    })
  }
  render() {
    const { children } = this.props
    return <RouterContext.Provider value={this.state}>{children}</RouterContext.Provider>
  }
}
