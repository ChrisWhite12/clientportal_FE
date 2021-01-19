import React, { Component } from 'react'
import '../App.css';
import { Navbar, Container, NavbarBrand } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return(
        <div className="fixed-bottom"> 
          <div className="footer"> 
            <a href="https://www.thebraintrainco.com/">www.thebraintrainco.com</a>
          </div>
        </div>
    )
  }
};

export default Footer