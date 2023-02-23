import React from 'react'
import { Navbar, Container,NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import "./navbar.css";
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
          <Navbar.Brand href="#home">
            <img
              src={require('./images/sitLogo.jpg')} 
              width="30"
              height="30"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
                        <Navbar.Brand href="#">Sineor in I.T.</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse  id="navbarScroll">
                            <Nav

                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >

                                <Nav.Link  as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                                <Nav.Link as={Link} to="/publicEvents">publicEvents</Nav.Link>
                                <Nav.Link as={Link} to="/register" class ="nxxv">register</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>

                <div >
                    <Routes>
                        <Route element={<About></About>} path="/about" />
                        <Route element={<Home></Home>} path="/home" />
                        <Route element={<Contact></Contact>} path="/contact" />
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
