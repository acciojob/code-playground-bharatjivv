import React from 'react';
import { Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, isAuthenticated }) => {
    // If not authenticated, redirect to login page
    if (!isAuthenticated) {
        return <Redirect to="/login" replace />;
    }
    
    // If authenticated, render the protected component
    return children;
};

export default PrivateRoute;