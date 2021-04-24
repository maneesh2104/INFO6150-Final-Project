import React from 'react';
import styled from 'styled-components';
import Image from "react-bootstrap/Image";
import { Jumbotron, Button } from 'react-bootstrap';
import bgimage from '../assets/homeimage.jpg';
import c1 from '../assets/cal.jpg';
import c2 from '../assets/find.jpg';
import c3 from '../assets/vdo.jpg';
import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import user3 from '../assets/user4.png';
import rectangle from '../assets/Rectangle.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BorderStyleRounded } from '@material-ui/icons';
import { blueGrey } from '@material-ui/core/colors';

const Styles = styled.div`
.body{font-family: 'Nunito', sans-serif;
padding: 100px;
}
.card{
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
    transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
padding: 14px 80px 18px 36px;
cursor: pointer;
}

.card:hover{
   transform: scale(1.05);
box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}

.card h3{
font-weight: 600;
}

.card img{
position: absolute;
top: 20px;
right: 15px;
max-height: 500px;
}



@media(max-width: 990px){
.card{
  margin: 20px;
}

    
    }
  }
} 
    



`;

class HomePage extends React.Component {

    render() {
        const mystyle = {
            background: `url(${c1})`,
            backgroundSize: 'cover',
            fluid: "true",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',

        };
        const mystyle2 = {
            background: `url(${c2})`,
            backgroundSize: 'cover',
            fluid: "true",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'

        };
        const mystyle3 = {
            background: `url(${c3})`,
            backgroundSize: 'cover',
            fluid: "true",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'

        };
        return (
            <div>
                <div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Styles>
                        <div >
                            <Jumbotron style={{ background: `url(${bgimage})`, backgroundSize: 'cover', fluid: "true", height: "520px" }}>

                                <p>
                                    <Button variant="primary" style={{ marginTop: '200px', marginRight: "950px" }}>Learn more</Button>
                                </p>
                            </Jumbotron>
                        </div>

                        <br />
                        <br />
                        <br />



                        <h2 style={{ padding: "10px", textAlign: "left", marginLeft: "80px" }}><b>Our Resources</b></h2>
                        <br></br>

                        <div class="container" >

                            <div class="row">
                                <div class="col-md-4">
                                    <div class="card card-1" style={mystyle2}>
                                        <p><h3><span style={{ display: "block" }}>Search </span><span> Doctors</span></h3>
                            Search by name, location, speciality and more</p>


                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card card-2" style={mystyle}>
                                        <h3>Book Appointment</h3>
                                        <p>More ways than ever to get the care you need.</p>

                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card card-3" style={mystyle3}>
                                        <h3>Video Consultation</h3>
                                        <p>Have a private online consultation with your doctor.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br />
                        <br />
                        <h2 style={{ padding: "20px", textAlign: "left", marginLeft: "80px" }}><b>Testimonials</b></h2>
                        <br />

                        <div id="my-carousel-bg" class="carousel-inner" style={{backgroundColor:'#B2D9DF'}}>
                        <Carousel 
                            
                            showArrows={true}
                            infiniteLoop={true}
                            showThumbs={false}
                            showStatus={false}
                            autoPlay={true}
                            interval={6100}
                        >
                            <div>
                                <Image src={user1} style={{ width: '24%', height: '25%', borderRadius: "50px" }} />
                                <div className="myCarousel">
                                    <h4>Shirley Fultz, 
                                    32</h4>
                                    <p><b>"Love it. Can book an appointment with a
                                    doctor in minutes and visit doctor from
                                    the comfort of my home"
                                    </b> </p>
                                    <br />
                                </div>
                            </div>

                            <div>
                                <Image src={user2} style={{ width: '24%', height: '30%', borderRadius: "50px" }} />
                                <div className="myCarousel">
                                    <h4>Daniel Keystone, 
                                    43</h4>
                                    <p><b>
                                        "Doctor’s feedback is good and describes
                                        the basic in a very detailed way"</b>
                                        </p>
                                    <br />
                                </div>
                            </div>

                            <div>
                                <Image src={user3} style={{ width: '24%', height: '30%', borderRadius: "50px" }} />
                                <div className="myCarousel">
                                    <h4>Theo Sorel, 
                                    65</h4>
                                    <p><b>
                                        "Very helpful and far easier and hassle free.
                                        Thanks for making doctor visits so easy
                                        and comfortable"</b>
                                        </p>
                                    <br />
                                </div>
                            </div>
                        </Carousel>
                        </div>
                        
                        <br>
                        </br>
                        <br>
                        </br>
                        <div >
                            <Jumbotron style={{ background: `url(${rectangle})`, backgroundSize: 'cover', fluid: "true", height: "520px" }}>
                                <h2 style={{ padding: "20px", textAlign: "left", marginLeft: "50px"}}><b>Join us!</b></h2>
                                <br></br>
                                <p style={{ textAlign: 'left', display:'block' }}><em><b>
                                Sign up for MD.com to unlock secure video visits, request appointments online, and more<br/> from desktop, tablet and mobile devices.<br></br> 
                                If you'd like a specific doctor to offer telemedicine and online appointments, let us know.</b></em>
                                    </p>
                                    <br/>

                                <p style={{ textAlign: 'left', paddingLeft:"30px" }}>
                                    <Button variant="primary" >Sign Up</Button>
                                </p>
                            </Jumbotron>
                        </div>
                    </Styles>
                </div>
            </div>


        )

    }
}

export default HomePage;
