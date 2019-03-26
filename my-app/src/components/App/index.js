import React from 'react';
import {
BrowserRouter as Router,
Route,
} from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import HomePage from '../Home';
import AdminPage from '../Admin';
import * as ROUTES from '../../constants/routes';
import { FirebaseContext } from '../Firebase';

const App = () => (
      <Router>
        <div>
          <Navigation />
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div>
      </Router>
);
export default App;