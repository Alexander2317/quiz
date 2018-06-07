import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import quiz from './quiz'

export default combineReducers({
  quiz,
  router
})