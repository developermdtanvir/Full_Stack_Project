import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

export const PrivetRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    console.log(user);
    const location = useLocation();

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children
}
