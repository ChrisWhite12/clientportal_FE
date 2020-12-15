import React, { Component, useState, useEffect } from 'react';
import { useGlobalState } from '../config/store';
import '../App.css';
// react-bootstrap components
import {Container, Row, Col} from 'react-bootstrap';
import SideNav from "../components/SideNav.js";
import { getPatients } from '../services/apiServices';
//form component
import { Button, Select, Input} from './FormComponents';
import { FormContainer } from './FormContainer';
  
    getPatients()
        .then((data) => {
            console.log(data)




        })
        .catch((err) => {
            console.log(err)
        })
  
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, []);
class ClientInfo extends React.Component {

  render() {
    return (
      <div>
        <div>
          <h1>ClientInfo</h1>
        </div>
        <form /* onSubmit={this.handleFormSubmit}*/>
          <div className="form-group">
            <input type="text"> {/* Name of Client */}</input>
            <input type="text"> {/* Address of Client */}</input> 
            <input type="text"> {/* Email of Client */}</input> 
            <input type="number"> {/* Phonenumber of Client */}</input> 
            <input type="text"> {/* DOB of Client */}</input> 
            <button type="radio"> {/* Gender Selection */}</button>
            <input type="text"> {/* Name of Emergency contact of Client */}</input>
            <button type="submit" className="m-10"> { /*Submit */ }</button>
            <button type="submit"> Clear the form</button>
          </div>
        </form> 
      </div>
    )
  }
}

export default ClientInfo