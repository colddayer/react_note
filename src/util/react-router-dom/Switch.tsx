import React, { useContext } from 'react'
import { pathToRegexp } from 'path-to-regexp'
import { RouterContext } from './context'

const Switch: React.FC = ({ children }) => {
  const childrenArray: React.ReactNodeArray = Array.isArray(children) ? children : [children]
  const context = useContext(RouterContext)

  for (const i of childrenArray) {
    const { path = '/', exact = false } = (i as React.ReactElement).props
    const keys: any = []
    if (context?.location.pathname.match(pathToRegexp(path, keys, { end: exact }))) {
      return i as React.ReactElement
    }
  }
  return null
}

export default Switch
