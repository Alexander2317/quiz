import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

import { base } from './constants'
import createRootReducer from './reducer'
import history from './history'

const composeEnhancers = composeWithDevTools({
  name: base.NAME_APPLICATION,
})

const configureStore = (preloadedState = {}) =>
  createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), thunk)),
  )

export default configureStore
