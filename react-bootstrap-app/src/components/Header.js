import React from 'react'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter, Route, Link, HashRouter } from "react-router-dom";
import FindDoctor from './FindDoctor'
import DoctorSearch from './DoctorSearch'
import Paypal from './Paypal'
import styled from 'styled-components';

const Styles=styled.div `
    .navbar {
        background-color: #7ad4e2;
        border-radius:10px;
        margin-top:5px;
        margin-left:5px;
        margin-right:5px;
        
    }
    
    .navbar-brand, .navbar-nav, .nav-link, .nav-item{
        color:white;
        

        &.hover{
            color:black;
        }
    
    }
`;

class Header extends React.Component
{

    render ()
    {
        return (
            <Styles>
            <HashRouter>
                <div className="App">
                    <Navbar  variant="light" expand="lg" fixed="top">
                        <Navbar.Brand href="/"><b>Practo</b></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {/* <Route exact path="/" component={ Home } /> */}
                            <Nav.Item><Nav.Link href="#find-a-doctor"><b>Find Doctor</b></Nav.Link></Nav.Item>
                            <Nav.Item> <Nav.Link href="#doctor-search"><b>Doctor Search</b></Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="#book-appoinment"><b>Book Appoinment</b></Nav.Link></Nav.Item>
                            
                        </Nav>
                        </Navbar.Collapse>
                        
                        
                    </Navbar>
                    <div className="content">
                        <Route exact path="/find-a-doctor" component={FindDoctor} />
                        <Route exact path="/doctor-search" component={ DoctorSearch } />
                        <Route exact path="/book-appoinment" component={Paypal} />
                        
                        {/* <Route path="/contatc" component={ Contact } />
                        <Route path="/jobs" component={ Jobs } /> */}
                    </div>
                </div>
            </HashRouter>
            </Styles>

        )

    }
}


export default Header;