import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import history from '../history'
import quiz from './quiz'

const reducer = combineReducers({
  router: connectRouter(history),
  quiz,
})

export default reducer
