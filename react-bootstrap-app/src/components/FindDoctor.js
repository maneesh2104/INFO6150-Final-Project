import React, { useState } from 'react';
import { Jumbotron, Card, CardDeck, Carousel } from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import { BrowserRouter, Route, Link, HashRouter } from "react-router-dom";
import bgimage from '../assets/jumbo2.png';
import genimage from '../assets/general1.jpeg'
import denimage from '../assets/dental1.jpg';
import eyeimage from '../assets/eye1.jpg';
import heartimage from '../assets/heart2.jpeg';
import skinimage from '../assets/skin.jpeg';
import lungsimage from '../assets/lungs.jpeg';
import c1 from '../assets/c4.jpg';
import c2 from '../assets/c2.jpg';
import c3 from '../assets/c3.jpg';
import styled from 'styled-components';
import * as Icon from 'react-bootstrap-icons';
import { event } from 'jquery';
const Styles = styled.div`

`;



class FindDoctor extends React.Component {

    constructor(props){
        super(props);
        this.setState({
            search: ""
        })
        this.searchButtonClicked = this.searchButtonClicked.bind(this);
        
    }

    searchButtonClicked(event){
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ specality: this.state.search})
        };
    
        fetch('http://localhost:3000/doctor/search', requestOptions)
            .then(response => response.json())
            .then(data => this.handleData(data));  
        console.log("Search clicked");
    }

    updateLName(evt){
        this.setState({
            search: evt
        })
    }



    handleData(data){
        console.log(data);
        if(data.message){
            //Show error
          //handleClickOpen();
        }
        else{
            this.props.history.push({
                pathname: '/doctor-search',
                state: { detail: data}
              })
        //   history.push('/sign-in');
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



                    <Jumbotron style={{ background: `url(${bgimage})`, backgroundSize: 'cover', fluid: "true", height: "550px", borderRadius: "15px", marginLeft: "10px", marginRight: "10px" }}>

                        

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
                                                        <input type="text" placeholder="Search..." class="form-control" id="search" name="search" onChange={ (event) => this.updateLName(event.target.value) }></input>
                                                    </div>
                                                    <div class="col-lg-1 col-md-3 col-sm-12 p-0">
                                                        <button  class="btn btn-base"  onClick={ (event) => this.searchButtonClicked(event)}>
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

                


            </section>






        )
    }
}

export default FindDoctor;