import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './styles/App.css'

import {
  Home,
  SignIn,
  SignUp,
  NotFound,
  RequestTrip,
  MyTrips,
  CreateTrip,
  Profile,
} from './screens'

import UpdateUser from './screens/UpdateUser'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pedir-viaje" component={RequestTrip} />
            <Route exact path="/mis-viajes" component={MyTrips} />
            <Route exact path="/crear-viaje" component={CreateTrip} />
            <Route exact path="/perfil" component={Profile} />
            <Route exact path="/perfil/editar" component={UpdateUser} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
