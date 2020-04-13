import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

export const App = () => (
  <Router>
    <Switch>
      <Route exact path='/'>
        main
      </Route>

      <Route path='/login'>
        login
      </Route>

      <Route path='/board/:boardId'>
        board
      </Route>
    </Switch>
  </Router>
)
