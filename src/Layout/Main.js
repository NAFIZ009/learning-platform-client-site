import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Fotter/Fotter';
import NavBar from '../component/NavBar/Navbar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default Main;