import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {Context} from '../../Context/AuthContext';
const PrivetRouter = ({children}) => {
    const location=useLocation();
    const {user}=useContext(Context);
    if(user&&user.uid){
        return children;
    }
    return <Navigate to={'/login'} state={{from:location}} replace/>
    
};

export default PrivetRouter;