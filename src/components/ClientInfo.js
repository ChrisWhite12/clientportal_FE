import React, { Component, useState, useEffect } from 'react';
import { useGlobalState } from '../config/store';
import '../App.css';
// react-bootstrap components
import {Container, Row, Col} from 'react-bootstrap';
import SideNav from "../components/SideNav.js";
import { getPatients } from '../services/apiServices';
  
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
  constructor(props) {
    super(props);

    this.state = {
      patient: {
        name: '',
        address_1: '',
        email: '',
        paitent_phone_numbers: '',
        date_of_birth: '',
        gender: '',
        emergency_contact: '',
      },

      genderOptions: ['Male', 'Female', 'Other']
    
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   alert('You have submitted the form.')
  // }
  // handleClearForm() {

  // }

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
            <button type="submit"> { /*Submit */ }</button>
            <button type="submit"> Clear the form</button>
          </div>
        </form> 
      </div>
    )
  }
}

export default ClientInfo


// class ClientInfo extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       name: {title: '', first: '', last: ''},
//     };
//   }

//   getUser() {
//     fetch()
//     .then(response => {
//       if(response.ok) return response.json();
//       throw new Error('Request failed.');
//     })
//     .then(data => {
//       this.setState({name: data.results[0].name,
//         image: data.results[0].picture.medium});
//     })
//     .catch(error => {
//       console.log(error);
//     });
//   }

//   render() {
//     return (
// 	<div>
//           <h1>{`${this.state.name.title} ${this.state.name.first} ${this.state.name.last}`}</h1>
// 	</div>
//     );
//   }
// }

// export default ClientInfo;