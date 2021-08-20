import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import {Nav,  Navbar, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const navbar = () => {
    return (
      <>
<Router>
 



<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >

<img
          alt=""
          src="https://d3n8a8pro7vhmx.cloudfront.net/gratafund/pages/274/attachments/original/1589869845/COVID_LAW_MONITOR_logo_germ.png?1589869845"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />

       
                <Navbar.Brand href="#home">Covidm</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav  className="ms-auto">
                        <Nav.Link href="#about"  >About</Nav.Link>
                        <Nav.Link eventKey={2} href="#about">
                        
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

      </Router>


      


      </>
    );
  };


    
  export default navbar;