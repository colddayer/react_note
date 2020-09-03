import React, { useContext } from 'react'
import { RouterContext } from './context'

interface IProps {
  to: string
}
const Link: React.FC<IProps> = ({ children, to }) => {
  const context = useContext(RouterContext)
  return (
    <a
      href='/'
      onClick={(e) => {
        e.preventDefault()
        context?.history.push(to)
      }}
    >
      {children}
    </a>
  )
}
export default Link
