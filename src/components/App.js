import React from 'react';
import { Route, Switch } from 'react-router-dom';

// UTILS
import PrivateRoute from '../utils/PrivateRoute.js'

// STYLES
import '../styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// COMOPNENTS
import LoginPage from './LoginPage.js'
import CreateAccount from './CreateAccount.js'
import Dashboard from './Dashboard.js'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ LoginPage } />
        <Route exact path='/create-account' component={ CreateAccount } />
        <PrivateRoute exact path="/dashboard" component={ Dashboard } />
      </Switch>
    </div>
  );
}

export default App;
