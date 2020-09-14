import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {
  ConnectedRouter as Router,
  routerMiddleware,
} from 'connected-react-router'

import { reducer, history } from '../redux'

function render(
  ui,
  {
    initialState,
    store = createStore(
      reducer(history),
      initialState,
      applyMiddleware(routerMiddleware(history), thunk),
    ),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router history={history}>{children}</Router>
      </Provider>
    )
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

const middlewares = [routerMiddleware(history), thunk]
const mockStore = configureStore(middlewares)

export * from '@testing-library/react'
export { render, mockStore }
