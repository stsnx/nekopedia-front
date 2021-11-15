import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
} from "react-router-dom";

import Home from '../page/home';
import ContactUs from '../page/contact';
import Type from '../page/type'
import Clinics from '../page/advice/clinics';
import Food from '../page/advice/food';
import Tips from '../page/advice/tips';
import Utility from '../page/advice/utility';
import './main.css'
export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>
                <nav className="navbar navbar-expand-sm navbar-light">
                      
                        <Navbar.Brand ><img src='1615735678280.jpg' height='50px' width='50px' href="#"id='logo' alt='eath'/>KanutFuckEath</Navbar.Brand>
                        <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className='nav-item'>
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                          </li>
                          <li className='nav-item'>  
                            <Nav.Link as={NavLink} to="/type">Type</Nav.Link>
                          </li> 
                          <NavDropdown title="Advice">
                            <NavDropdown.Item as={NavLink} to="/advice/food">Cat Food</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/advice/utility">Cat utility item</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/advice/clinics">Nearly Clinic</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/advice/tips">Tips and Tricks</NavDropdown.Item>
                          </NavDropdown>
                          <li className='nav-item'>  
                            <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
                          </li>
                        </ul>
                        </div>
                    </nav>
                </div>
                <div>
                    <Routes>
                        <Route path="/advice/food" element={ <Food />}/>
                        <Route path="/advice/utility" element={ <Utility />}/>
                        <Route path="/advice/clinics" element={ <Clinics />}/>
                        <Route path="/advice/tips" element={ <Tips />}/>
                        <Route path="/type" element={ <Type />}/>
                        <Route path="/contact" element={<ContactUs />}/>
                        <Route path="/home"element={<Home />}/> 
                        <Route path="/"element={<Home />}/> 
                    </Routes>
                </div>
            </Router>
        )
    }
}