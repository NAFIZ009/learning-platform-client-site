import React, { useState } from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { Context } from '../../Context/AuthContext';
import './Navbar.css'

const NavBar = () => {
  const {user,userLogOut}=useContext(Context);
  const [light,setLight]=useState(false);
  console.log(user)
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link to='/' className='logoName'>Edu World</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{flexGrow:0}}>
          <Nav className="me-auto fw-bold">
            <NavLink to='/courses' style={{textDecoration:"none",padding:'16px',fontSize:"18px"}}>Course</NavLink>
            <NavLink to='/faq'  style={{textDecoration:"none",padding:'16px',fontSize:"18px"}} >FAQ</NavLink>
            <NavLink to='/blogs'  style={{textDecoration:"none",padding:'16px',fontSize:"18px"}} >Blogs</NavLink>
            
          </Nav>
          <Nav className="fw-bold gap-3" >
            {
              user&&user.uid?<NavLink onClick={()=>{userLogOut()}}  style={{textDecoration:"none",padding:'16px',fontSize:"18px"}} >Log Out</NavLink>:<NavLink to='/login'  style={{textDecoration:"none",padding:'16px',fontSize:"18px"}} >Log In</NavLink>
              
            }
            {
              user&&<><div className="avatar d-flex ps-3 align-items-center">
              <div className="h-10 w-10 rounded-full">
              <button type="button" className="h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="top" title={user.displayName}>
              <img src={user.photoURL} alt=''/>
              </button>
              </div>
            </div>
            </>
            }
            <div className='d-flex justify-content-center gap-3 align-items-center'>
            <p className={`${light?'text-light':'text-primary'} mb-0`}>{light?'Light':'Dark'}</p>
            <input type="checkbox" onChange={e=>{
              if(e.target.checked){
                setLight(true);
              }else{
                setLight(false);
              }
            }} className="toggle"  />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NavBar;