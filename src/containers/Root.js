import React from 'react'
import { Provider } from 'react-redux'
import App from './App'

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <App />
      </Provider>
    )
  }
}

Root.propTypes = {
  store: React.PropTypes.object.isRequired
}
