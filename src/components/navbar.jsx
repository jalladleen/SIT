import React from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Home from '../pages/home';
import Contact from '../pages/contact';
import About from '../pages/about';
import { Component } from 'react';

export default class NavbarComp extends Component {
    render() {
        return (
           
                <div>

                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand href="#">SIT</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
              
                <div>
                    <Routes>
                        <Route element={<About></About>} path="/about" />
                        <Route element={<Home></Home>} path="/home" />
                        <Route element={<Contact></Contact>} path="/contact" /> 
                            
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