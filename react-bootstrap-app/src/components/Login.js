import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap';

class Login extends React.Component
{

    render ()
    {
        var formStyle={
            width:"50%",
            margin:"auto",
            marginTop:"50px",
            padding:"20px",
            boxShadow:"5px 5px 5px gray"
        }

        return (
            <div style={formStyle}>
                <h4>LOG IN</h4>
                <p>Don't have an account? <a href="#signup">create account</a></p>
                <Form>
                    <label for="email" className="col-md-2">Email</label>
                    <input type="email" className="email col-md-3" id="email" required/><br/>

                    <label for="password" className="col-md-2">Password</label>
                    <input type="password" className="password col-md-3" id="password" required/><br/>

                    <Button className="col-md-2" type="submit"><strong>SUBMIT</strong></Button><br/>
                </Form>
            </div>

        )

    }
}

export default Login;