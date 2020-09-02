import React from 'react'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'

import { history } from '../redux'

const Pages = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" render={() => <div>Match</div>} />
      <Route render={() => <div>Miss</div>} />
    </Switch>
  </ConnectedRouter>
)

export default Pages
