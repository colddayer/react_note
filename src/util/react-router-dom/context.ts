import React from 'react'

interface RouterContext {
  location: {
    pathname: string
    state: any
  }
  history: {
    push: Function
  }
}
export const RouterContext = React.createContext<RouterContext | null>(null)
