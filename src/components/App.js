import React, { useState } from 'react';
import { Switch, Route, Link, Redirect, BrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage.js';
import Playground from '../pages/Playground.js';
import PrivateRoute from './PrivateRoute.js';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div className="main-container">
        <nav>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/playground">PlayGround</Link></li>
          </ul>
        </nav>

        <p data-testid="status-msg">
          {isAuthenticated
            ? 'Logged in, Now you can enter Playground'
            : 'You are not authenticated, Please login first'}
        </p>

        <Switch>
          <PrivateRoute
            path="/playground"
            isAuthenticated={isAuthenticated}
            component={Playground}
          />

          <Route
            path="/login"
            render={(props) => (
              <LoginPage
                {...props}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            )}
          />

          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
