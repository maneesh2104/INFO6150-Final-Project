import React from 'react'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter, Route, Link, HashRouter } from "react-router-dom";
import FindDoctor from './FindDoctor'
import DocSearch from './DocSearch'
import Paypal from './Paypal'
import BookingPage from './BookingPage'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Twillio from './Twillio'


class Header extends React.Component
{

    render ()
    {
        return (
            <HashRouter>
                <div className="App">
                    <Navbar bg="primary" variant="dark">
                        <Navbar.Brand href="#home">Practo</Navbar.Brand>
                        <Nav className="mr-auto">
                            {/* <Route exact path="/" component={ Home } /> */}
                            <Nav.Link href="#find-a-doctor">Find Doctor</Nav.Link>
                            <Nav.Link href="#doctor-search">Doctor Search</Nav.Link>
                            <Nav.Link href="#book-appoinment-final">Book appoinment Final</Nav.Link>
                            <Nav.Link href="#sign-in">Sign In</Nav.Link>
                            <Nav.Link href="#sign-up">Sign Up</Nav.Link>
                            <Nav.Link href="#twillio">Twillio</Nav.Link>
                            
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                    </Navbar>
                    <div className="content">
                        <Route exact path="/find-a-doctor" component={ FindDoctor } />
                        <Route path="/doctor-search" component={ DocSearch } />
                        <Route path="/book-appoinment" component={Paypal} />
                        <Route path="/book-appoinment-final" component={BookingPage} />
                        <Route path="/sign-in" component={SignIn} />      
                        <Route path="/sign-up" component={SignUp} />
                        <Route path="/twillio" component={Twillio} />                                         
                        {/* <Route path="/contatc" component={ Contact } />
                        <Route path="/jobs" component={ Jobs } /> */}
                    </div>
                </div>
            </HashRouter>

        )

    }
}

export default Header;