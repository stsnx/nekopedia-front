import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
} from "react-router-dom";

import Home from '../page/home';
import Store from '../page/store';
import Type from '../page/type'
import './main.css'
export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>
                <nav className="navbar navbar-expand-lg navbar-light">
                      
                        <Navbar.Brand ><img src='1615735678280.jpg' height='50px' width='50px' href="#"id='logo' alt='eath'/>KanutFuckEath</Navbar.Brand>
                        <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className='nav-item'>
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                          </li>
                          <li className='nav-item'>  
                            <Nav.Link as={NavLink} to="/type">Type</Nav.Link>
                          </li> 
                          <li className='nav-item'>  
                            <Nav.Link as={NavLink} to="/store">Store</Nav.Link>
                          </li>
                        </ul>
                        </div>
                    </nav>
                </div>
                <div>
                    <Routes>
                        <Route path="/type" element={ <Type />}/>
                        <Route path="/store" element={<Store />}/>
                        <Route path="/home"element={<Home />}/> 
                        <Route path="/"element={<Home />}/> 
                    </Routes>
                </div>
            </Router>
        )
    }
}