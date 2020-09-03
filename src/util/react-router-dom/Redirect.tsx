import React from 'react'
import { useContext } from 'react'
import { RouterContext } from './context'

interface IProps {
  to: string
  from?: string
}
const Redirect: React.FC<IProps> = ({ to, from }) => {
  const context = useContext(RouterContext)
  if (!from) {
    setTimeout(() => {
      context?.history.push(to)
    })
    return null
  }
  if (from === context?.location.pathname) {
    setTimeout(() => {
      context?.history.push(to)
    })
  }
  return null
}

export default Redirect
