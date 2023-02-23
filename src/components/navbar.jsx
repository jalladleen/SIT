import React from 'react'
import { Navbar, Container,NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import "./navbar.css";
import Courses from '../pages/courses';
import Home from '../pages/home';
import Contact from '../pages/contact';
import About from '../pages/about';
import Register from '../pages/register';
import PublicEvents from '../pages/publicEvents';


import { Component } from 'react';

export default class NavbarComp extends Component {
    render() {
        return (

                <div>

                    <Navbar bg="light" variant={"light"} expand="lg">
                    <Container>
            <Navbar.Brand href="#">
              <img className="sit-logo" src={require('./images/sitLogo.png')} alt="SIT logo" />
              <span className="sit-text">Senior in I.T.</span>
            </Navbar.Brand>
          </Container>
            <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse  id="navbarScroll">
                <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px', marginRight: '100px' }} navbarScroll>
                <Nav.Link as={Link} to="/home" style={{fontWeight: 'bold', color: '#4C4E52', fontSize: '20px'}}>Home</Nav.Link>
                <Nav.Link as={Link} to="/about" style={{fontWeight: 'bold', color: '#4C4E52', fontSize: '20px'}}>About</Nav.Link>
                <Nav.Link as={Link} to="/courses" style={{fontWeight: 'bold', color: '#4C4E52', fontSize: '20px'}}>Courses</Nav.Link>
                <Nav.Link as={Link} to="/contact" style={{fontWeight: 'bold', color: '#4C4E52', fontSize: '20px'}}>Contact</Nav.Link>
                <Nav.Link as={Link} to="/publicEvents" style={{fontWeight: 'bold', color: '#4C4E52', fontSize: '20px'}}>PublicEvents</Nav.Link>
                <Nav.Link as={Link} to="/register" class ="nxxv" style={{fontWeight: 'bold', color: '#4C4E52', fontSize: '20px'}}>Register</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>

                <div >
                    <Routes>
                        <Route element={<About></About>} path="/about" />
                        <Route element={<Home></Home>} path="/home" />
                        <Route element={<Contact></Contact>} path="/contact" />
                        <Route element={<Courses></Courses>} path="/courses" />
                        <Route element={<Register></Register>} path="/register" />
                        <Route element={<PublicEvents></PublicEvents>} path="/publicEvents" />

                        {/* </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="../pages/home">
                            <Home />
                        </Route> */}
                    </Routes>
                </div>
                </div>

        )
    }
}
