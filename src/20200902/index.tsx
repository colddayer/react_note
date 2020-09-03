// import { Route, HashRouter } from 'react-router-dom'
import React from 'react'
import Home from './home'
import A from './a'
import B from './b'
// import HashRouter from '../util/react-router-dom/HashRouter'
import Route from '../util/react-router-dom/Route'
import Link from '../util/react-router-dom/Link'
import Redirect from '../util/react-router-dom/Redirect'
import Switch from '../util/react-router-dom/Switch'
import BrowserRouter from '../util/react-router-dom/BrowserRouter'

export const Page: React.FC = () => {
  return (
    // <HashRouter>
    <BrowserRouter>
      <div>
        <Link to='/'>page home</Link>
        <span>------</span>
        <Link to='/a'>page a</Link>
        <span>------</span>
        <Link to='/b'>page b</Link>
      </div>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/a' component={A} />
        <Route path='/b' component={B} />
        <Route path='/error' component={() => <div>404 not found</div>} />
        <Redirect to='/error' />
      </Switch>
    </BrowserRouter>
    // </HashRouter>
  )
}
