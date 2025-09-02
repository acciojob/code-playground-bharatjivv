import React from "react";
import './../styles/App.css';
import CodePlayground from "./CodePlayground";
import { NavLink, Route, Switch } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleAuthentication = () => {
    setIsAuthenticated((prevAuth) => !prevAuth);
  }

  return (
    <div className="main-container">
      <h1>
        {isAuthenticated ? "Logged in, Now you can enter Playground" : "You are not authenticated, Please login first"}
      </h1>

      <nav>
        <ol>
          <li><NavLink to="/">PlayGround</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </ol>
      </nav>
      
      <div>
        <Switch>
          {/* In React Router v5, we use 'component' or 'render' prop instead of 'element' */}
          <Route 
            path="/login" 
            render={(props) => (
              <Login 
                {...props} 
                handleAuthentication={handleAuthentication} 
                isAuthenticated={isAuthenticated} 
              />
            )} 
          />
          <Route
            exact
            path="/"
            render={(props) => (
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <CodePlayground 
                  {...props}
                  handleAuthentication={handleAuthentication} 
                  isAuthenticated={isAuthenticated} 
                />
              </PrivateRoute>
            )}
          />
          <Route path="*" render={() => <p>Page not Found</p>} />
        </Switch>
      </div>
    </div>
  )
}

export default App