import React from 'react'
import ReactDOM from 'react-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'

import 'bootstrap/dist/css/bootstrap.css'

const target = document.getElementById('root')
const store = configureStore(window.__INITIAL_STATE__, true)

const node = (
  <Root store={store} />
)

ReactDOM.render(node, target)
