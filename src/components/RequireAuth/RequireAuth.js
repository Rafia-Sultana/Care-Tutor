import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../Login/firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    console.log(user);
    if (loading) {
        return <p>Loading</p>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    } else {
        return children;
    }
};

export default RequireAuth;