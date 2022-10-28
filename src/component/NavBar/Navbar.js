import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { Context } from '../../Context/AuthContext';
import './Navbar.css'

const NavBar = () => {
  const {user,userLogOut}=useContext(Context);
  console.log(user);
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
              user&&user.uid&&user.emailVerified?<NavLink onClick={()=>{userLogOut()}}  style={{textDecoration:"none",padding:'16px',fontSize:"18px"}} >Log Out</NavLink>:<><NavLink to='/login'  style={{textDecoration:"none",padding:'16px',fontSize:"18px"}} >Log In</NavLink>
              <NavLink to='/register'  style={{textDecoration:"none",padding:'16px',fontSize:"18px"}} >Register</NavLink></>
            }
            {
              user&&user.emailVerified&&user.photoURL&&<><div className="avatar d-flex align-items-center">
              <div className="h-10 w-10  rounded-full">
                <img src={user.photoURL} />
              </div>
            </div>
            </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NavBar;