import React from 'react'
import { RouterContext } from './context'
import { pathToRegexp } from 'path-to-regexp'

interface RouteProps {
  component: React.FC<any> | React.ComponentClass<any>
  path: string
  exact?: boolean
}
export default class Route extends React.Component<RouteProps> {
  static contextType = RouterContext
  declare context: React.ContextType<typeof RouterContext>
  static keys = []
  render() {
    const { component: Component, path, exact } = this.props
    const { pathname } = this.context?.location!
    const regxp = pathToRegexp(path, Route.keys, { end: !!exact })
    if (pathname.match(regxp)) {
      return <Component {...this.context!} />
    }
    return null
  }
}
