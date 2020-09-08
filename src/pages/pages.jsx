import React from 'react'
import { Route, Switch, Redirect } from 'react-router'

import Home from './home'
import Quiz from './quiz'
import Result from './result'
import NotFound from './not-found'

import { constants } from '../redux'

const { routes } = constants

const Pages = () => (
  <Switch>
    <Redirect exact strict from={`${routes.baseRoute}/`} to={routes.index} />
    <Route exact strict path={routes.index} component={Home} />
    <Route strict exact path={routes.quiz} component={Quiz} />
    <Route strict exact path={routes.result} component={Result} />
    <Route component={NotFound} />
  </Switch>
)

export default Pages
