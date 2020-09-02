import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import quiz from './quiz'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    quiz,
  })
export default createRootReducer
