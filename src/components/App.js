import React from "react";
import './../styles/App.css';
import CodePlayground from "./CodePlayground";
import { NavLink, Route, Routes } from "react-router-dom";
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
        <Routes>
          <Route path="/login" element={<Login handleAuthentication={handleAuthentication} isAuthenticated={isAuthenticated} />} />
          <Route
            path="/"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <CodePlayground handleAuthentication={handleAuthentication} isAuthenticated={isAuthenticated} />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<p>Page not Found</p>} />
        </Routes>
      </div>
    </div>
  )
}

export default App