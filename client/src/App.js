import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Books } from './pages'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={props =>
          <Books {...props} type={'search'} />} />
        <Route exact path="/saved" render={props => 
          <Books {...props} type={'saved'} />} />
      </Switch>
    </Router>
  )
}

export default App
