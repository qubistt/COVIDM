import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import {Nav,  Navbar, NavDropdown } from 'react-bootstrap';

const navbar = () => {
    return (
      <>
      <h1 className="testing">Helo</h1>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                        
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

      </>
    );
  };
    
  export default navbar;