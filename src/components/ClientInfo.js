import React, { Component } from 'react';
import '../App.css';
import SideNav from "../components/SideNav.js";
import FormContainer from './FormContainer';
import { Button, Select, Input} from '../components/FormComponents';

class ClientInfo extends React.Component {
  render() {
    return (
      <div className="container">
        <div>
          <h1>ClientInfo</h1>
        </div>
        <div><FormContainer />
        </div>
      </div>
    )
  }
}

export default ClientInfo