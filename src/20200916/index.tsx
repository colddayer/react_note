import React from 'react'
import { Link, Route } from 'react-router-dom'
import { Home } from './Home'
import { Counter } from './Counter'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import history from './history'
import ConnectedRouter from '../util/connected-react-router/ConnectedRouter'
import { PersistGate } from 'redux-persist/integration/react'

const Page: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ConnectedRouter history={history}>
          <Link to='/'>Home</Link>
          <span>-----</span>
          <Link to='/counter'>Counter</Link>
          <Route path='/' exact component={Home} />
          <Route path='/counter' component={Counter} />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  )
}

export default Page
