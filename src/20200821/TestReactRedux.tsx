import React from 'react'
import Provider from '../util/react-redux/Provider'
import { store } from './store'
import { connect } from '../util/react-redux/connect'
class Page extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <WrapCount />
      </Provider>
    )
  }
}

class Count extends React.Component {
  constructor(props = {}) {
    super(props)
  }
  render() {
    return <div>123</div>
  }
}

const WrapCount = connect()(Count)

export default Page
