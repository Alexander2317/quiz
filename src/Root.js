import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {ConnectedRouter as Router} from 'react-router-redux'
import MainQuiz from './Components/MainQuiz';
import HomePage from './Components/HomePage';
import store from './store'
import history from './history'
import {Route, NavLink} from 'react-router-dom'

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/quiz'>Quiz</NavLink>

            <Route path='/' component={HomePage}/>
            <Route path='/quiz' component={MainQuiz}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default Root;