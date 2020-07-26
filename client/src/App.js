import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Saved, Search } from './pages'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
    </Router>
  )
}

export default App
