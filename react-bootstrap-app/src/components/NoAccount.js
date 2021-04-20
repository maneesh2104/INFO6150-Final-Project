import React from 'react'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter, Route, Link, HashRouter } from "react-router-dom";

class NoAccount extends React.Component
{

    render ()
    {
        var style={
            padding:"10px",
            float:"right"
        }
        return (
            <div style={style}>
                <a href="#login">Login</a>&nbsp;&nbsp;
                <a href="#signup">Signup</a>
            </div>

        )

    }
}

export default NoAccount;