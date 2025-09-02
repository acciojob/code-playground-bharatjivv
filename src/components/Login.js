import React from "react";

const Login = ({ handleAuthentication, isAuthenticated }) => {
    return (
        <>
            <p>{isAuthenticated? "Logout" : "Login"}</p>
            <button onClick={handleAuthentication}>
                {isAuthenticated ? 'Log Out' : 'Log In'}
            </button>
        </>
    );
}

export default Login;