import React from 'react'
import Route from './Route'

export const withRouter = (component: React.ClassicComponentClass | React.FC): React.FC => {
  return () => <Route component={component} />
}
