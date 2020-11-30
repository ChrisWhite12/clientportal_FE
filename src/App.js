import './App.css';
import Nav from './components/Nav';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Login from './components/Login.js';
import Register from './components/Register.js'

function App() {
  return (
    <Router>  
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/sign_in' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </div>
    </Router>

  );
}

export default App;
