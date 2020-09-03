import { useContext } from 'react'
import { RouterContext } from './context'

interface IProps {
  to: string
  from?: string
}
const Redirect: React.FC<IProps> = ({ to, from }) => {
  const context = useContext(RouterContext)
  if (!from) {
    context?.history.push(to)
    return null
  }
  if (from === context?.location.pathname) {
    context?.history.push(to)
  }
  return null
}

export default Redirect
