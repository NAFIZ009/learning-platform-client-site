import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link to='/' className='logoName' style={{}}>Edu World</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{flexGrow:0}}>
          <Nav className="me-auto fw-bold">
            <NavLink style={{textDecoration:"none",padding:'16px',fontSize:"18px"}}>Course</NavLink>
            <NavLink style={{textDecoration:"none",padding:'16px',fontSize:"18px"}} >FAQ</NavLink>
            <NavLink style={{textDecoration:"none",padding:'16px',fontSize:"18px"}} >Blogs</NavLink>
            <NavLink style={{textDecoration:"none",padding:'16px',fontSize:"18px"}} >Theme</NavLink>
          </Nav>
          <Nav>
                
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NavBar;