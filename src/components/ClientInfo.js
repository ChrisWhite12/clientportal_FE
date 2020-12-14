import React, { Component, useState, useEffect } from 'react';
import { useGlobalState } from '../config/store';
import '../App.css';
// react-bootstrap components
import {Container, Row, Col} from 'react-bootstrap';
import SideNav from "../components/SideNav.js";


function createClient () {

useEffect(() => {
  // GET request using fetch inside useEffect React hook
  const requestOptions = {
      method: 'GET',
      headers: {
        Accept: "application/json",
        Authorization: "Basic TVMwMU1URTNNRFE1TXpBek1ESTFOalE1TXpBdGNUWnVlSFp0YWxKMk56Um9NVmRLYmtkS1VrOWtUSFZ0ZDNZMmQzVXpiRmMtYXUyOg==",
        "User-Agent": "Caity McC (ferguselchancho@gmail.com)"
        },
      body: JSON.stringify({ title: 'Client Information' })
  };
  fetch('https://api.au2.cliniko.com/v1/patients', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

}

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