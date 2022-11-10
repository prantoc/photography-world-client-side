import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    let location = useLocation();
    if (loading) {
        return <div className='d-flex justify-content-center'>
            <Spinner animation="border" role="status" className='text-white'>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    }
    if (user && user.uid) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;


};

export default PrivateRoutes;