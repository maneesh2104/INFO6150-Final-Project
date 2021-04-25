import React, { useState } from 'react';
import { Jumbotron, Card, CardDeck, Carousel } from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import { BrowserRouter, Route, Link, HashRouter } from "react-router-dom";
import bgimage from '../assets/final2.png';
import genimage from '../assets/general1.jpeg'
import denimage from '../assets/dental1.jpg';
import eyeimage from '../assets/eye1.jpg';
import heartimage from '../assets/heart2.jpeg';
import skinimage from '../assets/skin.jpeg';
import lungsimage from '../assets/lungs.jpeg';
import c1 from '../assets/Untitled1.png';
import c2 from '../assets/Untitled2.png';
import c3 from '../assets/Untitled3.png';
import styled from 'styled-components';
import * as Icon from 'react-bootstrap-icons';
import { event } from 'jquery';
const Styles = styled.div`

`;



class FindDoctor extends React.Component {

    constructor(props) {
        super(props);
        console.log(localStorage.getItem("patient_email"));
        this.setState({
            search: ""
        })
        this.searchButtonClicked = this.searchButtonClicked.bind(this);

    }

    searchButtonClicked(event) {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ specality: this.state.search })
        };

        fetch('http://localhost:3000/doctor/search', requestOptions)
            .then(response => response.json())
            .then(data => this.handleData(data));
        console.log("Search clicked");
    }

    // searchButton(event) {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ specality: event })
    //     };

    //     fetch('http://localhost:3000/doctor/search', requestOptions)
    //         .then(response => response.json())
    //         .then(data => this.handleData(data));
    //     console.log("Search clicked");
    // }

    

    updateLName(evt) {
        this.setState({
            search: evt
        })
    }



    handleData(data) {
        console.log(data);
        if (data.message) {
            //Show error
            //handleClickOpen();
        }
        else {
            this.props.history.push({
                pathname: '/doctor-search',
                state: { detail: data }
            })
        }

    }

    render() {
        return (

            <section>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div classname="jumbotron jumbotron fluid">



                    <Jumbotron style={{ background: `url(${bgimage})`, backgroundSize: 'cover', fluid: "true", height: "425px", borderRadius: "15px", marginLeft: "10px", marginRight: "10px" }}>
                        <p style={{ textAlign: "left", diplay: 'block', marginTop: '50px', paddingLeft: "40px" }}> <h1><b>Quick and convenient care
                        just<br></br> a click away</b></h1></p>
                        <div class="search" style={{marginTop:"20px"}}>
                    
                                    <form id="search-form" className="bg-gray-200 p-5" style={{border:"2px", marginLeft:"1px"}}>
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="row no-gutters">
                                                    
                                                    <div class="col-lg-8 col-md-6 col-sm-12 p-0">
                                                        <input type="text" placeholder="Type Speciality" class="form-control" id="search" name="search" onChange={(event) => this.updateLName(event.target.value)}></input>
                                                    </div>
                                                    <div >
                                                        <button  class="btn btn-base" onClick={(event) => this.searchButtonClicked(event)} style={{backgroundColor:'#3c99fe',height:"60%"}}>
                                                            Search 
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                        </div>
                            
                
                        



                    </Jumbotron>
                </div>
                




                <h3 style={{ padding: "20px", textAlign: "left", marginLeft: "50px" }}>Top Searched Specialities</h3>
                
               
                <br>
                </br>
                <Styles>
                    <CardDeck style={{ borderColor: "white", paddingLeft: "30px", paddingRight: "30px" }}>
                        <Card style={{ borderColor: "white", borderTopRightRadius: "50px", borderTopLeftRadius: "50px", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px" }} >
                            <Card.Img variant="top" src={genimage} style={{ borderTopRightRadius: "50px", borderTopLeftRadius: "50px" }} />

                            <Card.Footer style={{ backgroundColor: "white", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px" }}>
                                <Card.Link href="#"><large><b>General</b></large></Card.Link>
                            </Card.Footer>
                        </Card>
                        <Card style={{ borderColor: "white", borderTopRightRadius: "50px", borderTopLeftRadius: "50px", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px" }} >
                            <Card.Img variant="top" src={denimage} style={{ borderTopRightRadius: "50px", borderTopLeftRadius: "50px" }} />

                            <Card.Footer style={{ backgroundColor: "white", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px" }}>
                                <Card.Link href="#"><large><b>Dentist</b></large></Card.Link>
                            </Card.Footer>
                        </Card>
                        <Card style={{ borderColor: "white", borderTopRightRadius: "50px", borderTopLeftRadius: "50px", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px" }} >
                            <Card.Img variant="top" src={eyeimage} style={{ borderTopRightRadius: "50px", borderTopLeftRadius: "50px" }} />

                            <Card.Footer style={{ backgroundColor: "white", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px" }}>
                                <Card.Link href="#"><large><b>Optomologist</b></large></Card.Link>
                            </Card.Footer>
                        </Card>
                        <Card style={{ borderColor: "white", borderTopRightRadius: "50px", borderTopLeftRadius: "50px", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px" }} >
                            <Card.Img variant="top" src={skinimage} style={{ borderTopRightRadius: "50px", borderTopLeftRadius: "50px" }} />

                            <Card.Footer style={{ backgroundColor: "white", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px" }}>
                                <Card.Link href="#"><large><b>Dermatologist</b></large></Card.Link>
                            </Card.Footer>
                        </Card>
                        <Card style={{ borderColor: "white", borderTopRightRadius: "50px", borderTopLeftRadius: "50px", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px" }} >
                            <Card.Img variant="top" src={heartimage} style={{ borderTopRightRadius: "50px", borderTopLeftRadius: "50px" }} />

                            <Card.Footer style={{ backgroundColor: "white", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px" }}>
                                <Card.Link href="#"><large><b>Cardiologist</b></large></Card.Link>
                            </Card.Footer>
                        </Card>
                        <Card style={{ borderColor: "white", borderTopRightRadius: "50px", borderTopLeftRadius: "50px", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px" }} >
                            <Card.Img variant="top" src={lungsimage} style={{ borderTopRightRadius: "50px", borderTopLeftRadius: "50px" }} />

                            <Card.Footer style={{ backgroundColor: "white", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px" }}>
                                <Card.Link href="#" ><large><b>Pulmonary</b></large></Card.Link>
                            </Card.Footer>
                        </Card>

                    </CardDeck>
                </Styles>
                <br></br>
                <br></br>
                <br></br>
                

                
                


                
                <h3 style={{ padding: "20px", textAlign: "left", marginLeft: "50px" }}>Simplifying Healthcare</h3>
                <br></br>
                
                <div class="container-fluid" >
                    <Carousel>
                        <Carousel.Item interval={2000}>
                            <Image
                                className="d-block w-100"
                                src={c1}
                                alt="First slide"
                                style={{ height: "400px", borderRadius: "10px" }}
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <Image
                                className="d-block w-100"
                                src={c2}
                                alt="Second slide"
                                style={{ height: "400px", borderRadius: "10px" }}
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <Image
                                className="d-block w-100"
                                src={c3}
                                alt="Third slide"
                                style={{ height: "400px", borderRadius: "10px" }}

                            />
                            
                        </Carousel.Item>
                    </Carousel>
                </div>
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <br></br>




            </section>






        )
    }
}

export default FindDoctor;