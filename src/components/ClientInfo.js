import React, { Component } from 'react';
import '../App.css';
import { getPatient } from '../services/apiServices';
//form component
import { Button, Select, Input} from './FormComponents';
import FormContainer from './FormContainer';
  
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