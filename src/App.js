import './App.css';
import MainNav from './components/MainNav';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useReducer, useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import Dashboard from './views/Dashboard';
import Dashboard from './components/Dashboard';
import Login from './components/Login.js';
import Register from './components/Register.js'
import stateReducer from './config/stateReducer'
import { StateContext } from './config/store';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import UsersAll from './components/Users';



function App() {

  // const API_KEY = process.env.REACT_APP_API_KEY;
  
  // initial state for state reducer
  const initialState = {
    loggedInUser: null
  }

  const [store, dispatch] = useReducer(stateReducer,initialState)

  return (
    <StateContext.Provider value={{store,dispatch}}>
      <Router>  
      <div className="App">
        <MainNav />
        <Switch>
          <Route exact path='/dashboard' component={Dashboard} />
          <Route path='/sign_in' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/forgot_password' component={ForgotPassword} />
          <Route path='/reset_password/:token' render={(props) => <ResetPassword {...props} />}/>
          <Route exact path='/users' component={UsersAll} />
        </Switch>
      </div>
      </Router>
    </StateContext.Provider>
  );
}

export default App;
