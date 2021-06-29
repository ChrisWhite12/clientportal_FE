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
import Footer from './components/Footer';

import stateReducer from './config/stateReducer'
import { StateContext } from './config/store';

function App() {
  
  // initial state for state reducer
  const initialState = {
    loggedInUser: null,
    patientInfo: {
      appointments: [],
      patient: {}
    }
  }

  //TODO mobile version
  //TODO complete testing
  //TODO twilio - change appointment notification
  
  const [store, dispatch] = useReducer(stateReducer,initialState)
  const {loggedInUser} = store
  
  return (
    <StateContext.Provider value={{store,dispatch}}>
      <Router>  
      <div className="App">
        <Switch>
          <Route exact path='/'>{(loggedInUser)? <Redirect to="/dashboard" /> : <Redirect to="/sign_in" />}</Route>
          <Route exact path='/dashboard' component={Dashboard}></Route>
          <Route path='/sign_in' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/forgot_password' component={ForgotPassword} />
          <Route path='/reset_password/:token' render={(props) => <ResetPassword {...props} />}/>
        </Switch>
        <Footer />
      </div>
      </Router>
    </StateContext.Provider>
  );
}

export default App;
