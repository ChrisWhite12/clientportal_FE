import React, { Component, useState, useEffect } from 'react';
import { useGlobalState } from '../config/store';
import '../App.css';
// react-bootstrap components
import {Container, Row, Col} from 'react-bootstrap';
import SideNav from "../components/SideNav.js";
import { getPatient } from '../services/apiServices';
//form component
import { Button, Select, Input} from './FormComponents';
import { FormContainer } from './FormContainer';
  
    
  
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, []);
class ClientInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    }
  }

  componentDidMount(){
    getPatient()
        .then((data) => {
            console.log(data)


        })
        .catch((err) => {
            console.log(err)
        })
  }

  render() {
    const {user} = this.state
    return (
      <div>
        <div>
          <h1>ClientInfo</h1>
        </div>
        <form /* onSubmit={this.handleFormSubmit}*/>
          <div className="form-group">
            <input type="text"></input>  {/* Name of Client */}
            <input type="text"></input>  {/* Address of Client */}
            <input type="text"></input>  {/* Email of Client */}
            <input type="number"></input>  {/* Phonenumber of Client */}
            <input type="text"></input>  {/* DOB of Client */}
            <button type="radio"></button> {/* Gender Selection */}
            <input type="text"></input> {/* Name of Emergency contact of Client */}
            <button type="submit" className="m-10"></button> { /*Submit */ }
            <button type="submit"> Clear the form</button>
          </div>
        </form> 
      </div>
    )
  }
}

export default ClientInfo