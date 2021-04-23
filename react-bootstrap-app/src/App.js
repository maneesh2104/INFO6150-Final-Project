import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header"
import { BrowserRouter, Route, Link } from "react-router-dom";








function App() {
  return (
   
    <div className="App" style={{backgroundColor:"#ecfafc"}}>
        <Header></Header>
    </div>
    

  );
}

export default App;
