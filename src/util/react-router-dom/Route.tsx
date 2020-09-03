import React from 'react'
import { RouterContext } from './context'
import { pathToRegexp, Key } from 'path-to-regexp'

interface RouteProps {
  component?: React.FC<any> | React.ComponentClass<any>
  path?: string
  exact?: boolean
  render?: (props: object) => React.ReactElement
}
export default class Route extends React.Component<RouteProps> {
  static contextType = RouterContext
  declare context: React.ContextType<typeof RouterContext>
  render() {
    const { component: Component, path = '/', exact = false, render } = this.props
    const { pathname } = this.context?.location!
    const keys: Key[] | [] = []
    const regxp = pathToRegexp(path, keys, { end: exact })
    const result = pathname.match(regxp)
    if (result) {
      const [url, ...values] = result
      const params: { [key in string]: string } = {}
      keys.forEach((key, index) => {
        params[key.name] = values[index]
      })
      const match = { params, url, path, isExact: url === pathname }
      if (Component) {
        return <Component {...this.context!} match={match} />
      }
      if (render) {
        return render({ ...this.context, match })
      }
    }
    return null
  }
}
