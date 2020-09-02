import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './home'
import Quiz from './quiz'
import NotFound from './not-found'

const Pages = () => (
  <Switch>
    <Route strict exact path="/" component={Home} />
    <Route strict exact path="/quiz" component={Quiz} />
    <Route component={NotFound} />
  </Switch>
)

export default Pages
