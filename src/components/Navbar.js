import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {
    NavLink
} from "react-router-dom";

import './main.css'


function NavBar() {
    
        return (
           
            <div>
                <Nav className="navbar navbar-expand-sm navbar-light">
                        <Navbar.Brand ><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Palang_Pracharath_Logo_%282020%29.svg/1200px-Palang_Pracharath_Logo_%282020%29.svg.png' height='50px' width='50px' href="#"id='logo' alt='eath'/>KanutFuckEath</Navbar.Brand>
                        <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                </Nav>
              </div>
              )
}
export default NavBar;