import React from 'react'
import { Nav, Navbar} from 'react-bootstrap';
import { Route, HashRouter } from "react-router-dom";
import FindDoctor from './FindDoctor'
import DocSearch from './DocSearch'
import Paypal from './Paypal'
import BookingPage from './BookingPage'
import SignIn from './SignIn'
import SignUp from './SignUp'
import SignUpDoctor from './SignUpDoctor'
import SignUpPatient from './SignUpPatient'
import Twillio from './Twillio'
import styled from 'styled-components';
import HomePage from './Homepage';
import patientProfile from "./patientProfile";


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
    constructor(props){
        super(props)
        this.state = {
            email:""
        }
    }
    componentDidMount(){
        this.setState({
            email: localStorage.getItem("patient_email")
        }
        )
    }

    render ()
    {
        return (
            <Styles>
            <HashRouter>
                <div className="App">
                    <Navbar  variant="light" expand="lg" fixed="top">
                        <Navbar.Brand href="#"><b>Cure Connect</b></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {/* <Route exact path="/" component={ Home } /> */}
                            <Nav.Item><Nav.Link href="#find-a-doctor"><b>Find Doctor</b></Nav.Link></Nav.Item>
                            {/* <Nav.Item> <Nav.Link href="#doctor-search"><b>Doctor Search</b></Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="#book-appoinment"><b>Book Appointment</b></Nav.Link></Nav.Item> */}
                            <Nav.Item><Nav.Link href="#sign-up"><b>Sign up</b></Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="#sign-in"><b>Sign in</b></Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="#twillio"><b>Video Consultation</b></Nav.Link></Nav.Item>
                        </Nav>
                        </Navbar.Collapse>
                        
                        
                    </Navbar>
                    <div className="content">
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/find-a-doctor" component={FindDoctor} />
                        <Route exact path="/doctor-search" component={ DocSearch } />
                        <Route exact path="/book-appoinment" component={BookingPage} />
                        <Route exact path="/sign-up" component={SignUp} />
                        <Route exact path="/sign-in" component={SignIn} />
                        <Route exact path="/patient-profile" component={patientProfile} />
                        <Route exact path="/payment" component={Paypal} />
                        <Route exact path="/twillio" component={Twillio} />

                        
                        {/* <Route path="/contatc" component={ Contact } />
                        <Route path="/jobs" component={ Jobs } /> */}
                    </div>
                </div>
                <footer class="site-footer" style={{backgroundColor:"#7AD4E2"}}>
                    <div class="container">
                        <br></br>
                        <br></br>
                        <div class="row">
                            <div class="col-sm-12 col-md-6">
                                <h6><b>About</b></h6>
                                <p class="text-justify"><i>Cure Connect </i> is a web-application that can enable users to search a doctor, book appointment for an video or in-person consultation and pay through PayPal.
                                </p>
                                <h6><b>Contact Us</b></h6>
                                <p  style={{textAlign:"center"}}>Northeastern University <br/>
                                316 Huntington Avenue<br/>
                                Boston, MA
                                </p>
                            </div>
                            <div class="col-xs-6 col-md-3">
                            </div>
                            <div class="col-xs-6 col-md-3">
                                <h6 style={{textAlign:'left'}}><b>Upcoming Locations</b></h6>
                                <ul class="footer-links" style={{listStyle:"none",textAlign:'left'}}>
                                    <li>New York</li>
                                    <li>San Francisco</li>
                                    <li>Texas</li>
                                    <li>Detroit</li>
                                    <li>Illinois</li>
                                    <li>Ohio</li>
                                    <li>Arkansas</li>
                                </ul>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div >
                                <p style={{marginLeft:'400px'}} >Copyright &copy; 2021 All Rights Reserved Cure-Connect
            </p>
                            </div>
                        </div>
                    </div>
                </footer>

            </HashRouter>
            </Styles>

        )

    }
}


export default Header;