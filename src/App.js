import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './styles/App.css'

import { Home, SignUp, NotFound } from './screens'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
