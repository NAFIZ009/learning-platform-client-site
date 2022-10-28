import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {Context} from '../../Context/AuthContext';
import Spinner from 'react-bootstrap/Spinner';
const PrivetRouter = ({children}) => {
    const location=useLocation();
    const {user,loading}=useContext(Context);
    if(loading){
        return <Spinner animation="border" role="status">
        <span className="visually-hidden mx-auto">Loading...</span>
      </Spinner>
    }
    if(user&&user.uid){
        return children;   
    }
    return <Navigate to={'/login'} state={{from:location}} replace/>
    
};

export default PrivetRouter;