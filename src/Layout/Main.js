import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../component/NavBar/Navbar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet/>
        </div>
    );
};

export default Main;