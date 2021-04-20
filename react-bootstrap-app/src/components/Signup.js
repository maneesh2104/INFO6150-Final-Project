import React from 'react'
import { Form, Button } from 'react-bootstrap';

class Signup extends React.Component{

    render ()
    {
        var formStyle={
            width:"50%",
            margin:"auto",
            marginTop:"50px",
            padding:"20px",
            boxShadow:"5px 5px 5px gray"
        }
        var inputStyle={
            marginTop:"5px"
        }
        return (
            <div style={formStyle}>
                <h4>CREATE ACCOUNT</h4>
                <p>Already have an account? <a href="#login">Log in</a></p>
                <Form>
			        <input type="text" className="firstName col-md-3" id="firstName" placeholder="FirstName" required/>&nbsp;
                    <input type="text" className="lastName col-md-3" id="lastName" placeholder="LastName" required/>
                    <br/>

                    <div style={inputStyle}>
			        <label><input type="radio" className="gender" id="male" value="male" required defaultChecked/>Male</label>&nbsp;&nbsp;
			        <label><input type="radio" className="gender" id="female" value="female" required/>Female</label>&nbsp;&nbsp;
			        <label><input type="radio" className="gender" id="others" value="others" required/>others</label>
			        </div>

                    <label className="col-md-2" for="birth">Birthday</label>
                    <input type="date" className="birth col-md-3" id="birth" required/><br/>

                    <input type="text" className="phone col-md-3" id="phone" placeholder="Phone" required/><br/>
                    <input type="email" style={inputStyle} className="email col-md-3" id="email" placeholder="Email" required/><br/>

                    <input type="password" style={inputStyle} className="password col-md-3" id="password" placeholder="Password" required/>&nbsp;
                    <input type="password" style={inputStyle} className="password col-md-3" id="password" placeholder="Password Again" required/><br/>

                    <Button className="col-md-2" style={inputStyle} type="submit"><strong>SUBMIT</strong></Button><br/>
                </Form>
            </div>

        )

    }
}

export default Signup;