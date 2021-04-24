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
                        <Navbar.Brand href="#"><b>Practo</b></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {/* <Route exact path="/" component={ Home } /> */}
                            <Nav.Item><Nav.Link href="#find-a-doctor"><b>Find Doctor</b></Nav.Link></Nav.Item>
                            {/* <Nav.Item> <Nav.Link href="#doctor-search"><b>Doctor Search</b></Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="#book-appoinment"><b>Book Appointment</b></Nav.Link></Nav.Item> */}
                            <Nav.Item><Nav.Link href="#sign-up"><b>Sign up</b></Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="#sign-in"><b>Sign in</b></Nav.Link></Nav.Item>
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
                        <Route exact path="/twillio" component={Twillio} />

                        
                        {/* <Route path="/contatc" component={ Contact } />
                        <Route path="/jobs" component={ Jobs } /> */}
                    </div>
                </div>
                <footer class="site-footer" style={{backgroundColor:"#7ad4e2"}}>
                    <div class="container">
                        <br></br>
                        <br></br>
                        <div class="row">
                            <div class="col-sm-12 col-md-6">
                                <h6>About</h6>
                                <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                            </div>

                            <div class="col-xs-6 col-md-3">
                                <h6>Categories</h6>
                                <ul class="footer-links">
                                    <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                                    <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                                    <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                                    <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                                    <li><a href="http://scanfcode.com/category/android/">Android</a></li>

                                </ul>
                            </div>

                            <div class="col-xs-6 col-md-3">
                                <h6>Quick Links</h6>
                                <ul class="footer-links">
                                    <li><a href="http://scanfcode.com/about/">About Us</a></li>
                                    <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                                    <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                                    <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                                    <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                                </ul>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-sm-6 col-xs-12">
                                <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by
         <a href="#">Scanfcode</a>.
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