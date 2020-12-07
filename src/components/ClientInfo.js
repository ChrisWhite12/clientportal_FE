import React, {Component} from 'react';
import {useGlobalState} from '../config/store';
import '../App.css';
// react-bootstrap components
import {Container, Row, Col} from 'react-bootstrap';
import SideNav from "../components/SideNav.js";

class ClientInfo extends React.Component {
  constructor(){
    super();
    this.state = {
      name: {title: '', first: '', last: ''},
      image: ''
    };
  }

  getUser() {
    fetch()
    .then(response => {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(data => {
      this.setState({name: data.results[0].name,
        image: data.results[0].picture.medium});
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
	<div>
          <h1>{`${this.state.name.title} ${this.state.name.first} ${this.state.name.last}`}</h1>
	</div>
    );
  }
}

export default ClientInfo;