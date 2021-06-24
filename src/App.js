import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useReducer } from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
// import Dashboard from './views/Dashboard';

import Login from './components/auth/Login.js';
import Register from './components/auth/Register.js'
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';

import Dashboard from './components/Dashboard';
import UsersAll from './components/Users';
import Footer from './components/Footer';

import stateReducer from './config/stateReducer'
import { StateContext } from './config/store';



function App() {
  
  // initial state for state reducer
  const initialState = {
    loggedInUser: null,
    patientInfo: {
      appointments: [],
      patient: {
        appointment_start: '',
        appointment_end: ''
      }
    }
  }

  //TODO mobile version
  //TODO handle tickets
  //TODO password reset with live server
  //TODO complete testing
  //TODO default client details in info form
  //optional twilio sms

  const [store, dispatch] = useReducer(stateReducer,initialState)
  const {loggedInUser} = store
  
  return (
    <StateContext.Provider value={{store,dispatch}}>
      <Router>  
      <div className="App">
        {/* <MainNav /> */}
        <Switch>
          <Route exact path='/'>{(loggedInUser)? <Redirect to="/dashboard" /> : <Redirect to="/sign_in" />}</Route>
          <Route exact path='/dashboard' component={Dashboard}></Route>
          <Route path='/sign_in' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/forgot_password' component={ForgotPassword} />
          <Route path='/reset_password/:token' render={(props) => <ResetPassword {...props} />}/>
          <Route exact path='/users' component={UsersAll} />
        </Switch>
        <Footer />
      </div>
      </Router>
    </StateContext.Provider>
  );
}

export default App;
