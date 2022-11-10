import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children, loading }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <button className="btn btn-square loading"></button>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;