import rootReducer from './rootReducer'
import thunk from 'redux-thunk'
import { applyMiddleware, compose, createStore } from 'redux'

export default function configureStore(initialState, debug = false) {
  let createStoreWithMiddleware

  const middleware = applyMiddleware(thunk)

  if (debug) {
    createStoreWithMiddleware = compose(
      middleware,
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  } else {
    createStoreWithMiddleware = compose(middleware)
  }

  const store = createStoreWithMiddleware(createStore)(
    rootReducer, initialState
  )
  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer')

      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
