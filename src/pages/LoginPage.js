import React from 'react';

function LoginPage({ isAuthenticated, setIsAuthenticated }) {
  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <div data-testid="login-page">
      <h3>Login</h3>
      {isAuthenticated ? (
        <button data-testid="logout-btn" onClick={handleLogout}>Log Out</button>
      ) : (
        <button data-testid="login-btn" onClick={handleLogin}>Log In</button>
      )}
    </div>
  );
}

export default LoginPage;