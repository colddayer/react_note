import React from 'react'
import Link from '../util/react-router-dom/Link'
import Route from '../util/react-router-dom/Route'
import Redirect from '../util/react-router-dom/Redirect'
import Switch from '../util/react-router-dom/Switch'

export default function A() {
  return (
    <div>
      <Link to='/a/1'>a 1</Link>
      <span>-----</span>
      <Link to='/a/2'>a 2</Link>
      <Switch>
        <Route component={() => <div>a1</div>} path='/a/1' />
        <Route component={() => <div>a2</div>} path='/a/2' />
        <Redirect to='/a/1' />
      </Switch>
    </div>
  )
}
