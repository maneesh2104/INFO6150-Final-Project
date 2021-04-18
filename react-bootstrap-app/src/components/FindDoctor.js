import React from 'react'
import { Jumbotron, Card, CardDeck, Carousel } from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import { BrowserRouter, Route, Link, HashRouter } from "react-router-dom";
import bgimage from '/Users/purva/Documents/GitHub/INFO6150-Final-Project/react-bootstrap-app/src/assets/jumbotron_image.jpeg';
import genimage from '/Users/purva/Documents/GitHub/INFO6150-Final-Project/react-bootstrap-app/src/assets/general.jpg';
import c1 from '/Users/purva/Documents/GitHub/INFO6150-Final-Project/react-bootstrap-app/src/assets/c4.jpg';
import c2 from '/Users/purva/Documents/GitHub/INFO6150-Final-Project/react-bootstrap-app/src/assets/c2.jpg';
import c3 from '/Users/purva/Documents/GitHub/INFO6150-Final-Project/react-bootstrap-app/src/assets/c3.jpg';
import styled from 'styled-components';
import * as Icon from 'react-bootstrap-icons';
const Styles = styled.div`




`;



class FindDoctor extends React.Component {


    render() {
        return (

            <section>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div classname="jumbotron jumbotron fluid">



                    <Jumbotron style={{ background: `url(${bgimage})`, backgroundSize: 'cover', fluid: "true", height: "450px", borderRadius: "15px", marginLeft: "10px", marginRight: "10px" }}>

                        <div class="row" >
                            <div class="col-md-6 no-padding">

                                <div class="js-cap-jumbotron jumbotron" style={{ backgroundColor: "white", opacity: 0.75, borderRadius: "15px" }}>
                                    <div class="js-cap-jumbotron-inside">
                                        <i class="calendar2check" style={{ fontSize: "80px" }}>
                                            <Icon.Calendar2Check />
                                        </i>
                                        <h3>Book Appointment</h3>
                                        <p class="cap-jumbotron-paragraph"><i>Schedule an appointment online with over 100,000 doctors.</i></p>


                                    </div>
                                </div>
                            </div>


                            <div class="col-md-6 no-padding">
                                <div class="js-cap-jumbotron jumbotron" style={{ backgroundColor: "white", opacity: 0.75, borderRadius: "15px" }}>
                                    <div class="js-cap-jumbotron-inside">
                                        <i class="cameravideo" style={{ fontSize: "80px" }}>
                                            <Icon.CameraVideo />
                                        </i>


                                        <h3>Video Consultation</h3>
                                        <p class="cap-jumbotron-paragraph"><i>Have a private online consultation with your doctor. </i></p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </Jumbotron>
                </div>
                <br></br>
                
               

                <div class="search">
                    <div class="row">
                        <div class="col-lg-12 card-margin">
                            <div class="card search-form">
                                <div class="card-body p-0">
                                    <form id="search-form">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="row no-gutters">
                                                    <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                                        <select class="form-control" id="exampleFormControlSelect1">
                                                            <option>Location</option>
                                                            <option>London</option>
                                                            <option>Boston</option>
                                                            <option>Mumbai</option>
                                                            <option>New York</option>
                                                            <option>Toronto</option>
                                                            <option>Paris</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-lg-8 col-md-6 col-sm-12 p-0">
                                                        <input type="text" placeholder="Search..." class="form-control" id="search" name="search"></input>
                                                    </div>
                                                    <div class="col-lg-1 col-md-3 col-sm-12 p-0">
                                                        <button type="submit" class="btn btn-base">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <br></br>
                
                

                <h3 style={{ padding: "20px", textAlign: "left", marginLeft: "20px" }}>Top Searched Specialities</h3>
                <Styles>
                    <CardDeck style={{ borderColor: "white", paddingLeft: "30px", paddingRight: "30px" }}>
                        <Card style={{ borderColor: "white", borderTopRightRadius: "50px", borderTopLeftRadius: "50px", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px" }} >
                            <Card.Img variant="top" src={genimage} style={{ borderTopRightRadius: "50px", borderTopLeftRadius: "50px" }} />

                            <Card.Footer style={{ backgroundColor: "white", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px" }}>
                                <Card.Link href="#"><large><b>General</b></large></Card.Link>
                            </Card.Footer>
                        </Card>
                        <Card style={{ borderColor: "white", borderTopRightRadius: "50px", borderTopLeftRadius: "50px", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px" }} >
                            <Card.Img variant="top" src={genimage} style={{ borderTopRightRadius: "50px", borderTopLeftRadius: "50px" }} />

                            <Card.Footer style={{ backgroundColor: "white", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px" }}>
                                <Card.Link href="#"><large><b>Dental</b></large></Card.Link>
                            </Card.Footer>
                        </Card>
                        <Card style={{ borderColor: "white", borderTopRightRadius: "50px", borderTopLeftRadius: "50px", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px" }} >
                            <Card.Img variant="top" src={genimage} style={{ borderTopRightRadius: "50px", borderTopLeftRadius: "50px" }} />

                            <Card.Footer style={{ backgroundColor: "white", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px" }}>
                                <Card.Link href="#"><large><b>Eyes</b></large></Card.Link>
                            </Card.Footer>
                        </Card>
                        <Card style={{ borderColor: "white", borderTopRightRadius: "50px", borderTopLeftRadius: "50px", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px" }} >
                            <Card.Img variant="top" src={genimage} style={{ borderTopRightRadius: "50px", borderTopLeftRadius: "50px" }} />

                            <Card.Footer style={{ backgroundColor: "white", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px" }}>
                                <Card.Link href="#"><large><b>Skin</b></large></Card.Link>
                            </Card.Footer>
                        </Card>
                        <Card style={{ borderColor: "white", borderTopRightRadius: "50px", borderTopLeftRadius: "50px", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px" }} >
                            <Card.Img variant="top" src={genimage} style={{ borderTopRightRadius: "50px", borderTopLeftRadius: "50px" }} />

                            <Card.Footer style={{ backgroundColor: "white", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px" }}>
                                <Card.Link href="#"><large><b>Heart</b></large></Card.Link>
                            </Card.Footer>
                        </Card>
                        <Card style={{ borderColor: "white", borderTopRightRadius: "50px", borderTopLeftRadius: "50px", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px" }} >
                            <Card.Img variant="top" src={genimage} style={{ borderTopRightRadius: "50px", borderTopLeftRadius: "50px" }} />

                            <Card.Footer style={{ backgroundColor: "white", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px" }}>
                                <Card.Link href="#" ><large><b>Bones</b></large></Card.Link>
                            </Card.Footer>
                        </Card>

                    </CardDeck>
                </Styles>
                <br></br>
                <br></br>
                
                <hr></hr>
                <br></br>
                <br></br>
                


                <div class="container-fluid" >
                    <Carousel>
                        <Carousel.Item interval={2000}>
                            <Image
                                className="d-block w-100"
                                src={c1}
                                alt="First slide"
                                style={{ height: "500px", borderRadius: "20px" }}
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <Image
                                className="d-block w-100"
                                src={c2}
                                alt="Second slide"
                                style={{ height: "500px", borderRadius: "20px" }}
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <Image
                                className="d-block w-100"
                                src={c3}
                                alt="Third slide"
                                style={{ height: "500px", borderRadius: "20px" }}

                            />
                            <Carousel.Caption>
                                <h3 style={{ color: 'black' }}>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <br></br>

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


            </section>






        )

    }
}

export default FindDoctor;