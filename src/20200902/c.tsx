import React from 'react'
import { withRouter } from '../util/react-router-dom/withRouter'

const C: React.FC = (props: any) => {
  return (
    <div>
      <a
        href='/'
        onClick={(e) => {
          e.preventDefault()
          props.history.push('/a')
        }}
      >
        to a page
      </a>
    </div>
  )
}

export default withRouter(C)
