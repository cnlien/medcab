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
import LandingPage from './LandingPage.js'
import Navigation from './Navigation.js'
import SearchResults from './SearchResults.js'

const App = () => {

  return (
    <div className="App">
      <Navigation />
      <div>
      <Switch>
        <Route exact path="/" component={ LandingPage } />
        <Route exact path='/create-account' component={ CreateAccount } />
        <Route exact path='/login' component={ LoginPage } />
        <PrivateRoute exact path="/dashboard" component={ Dashboard } />
        <Route path='/search-results' component={ SearchResults } />
      </Switch>

      </div>
    </div>
  );
}

export default App;
