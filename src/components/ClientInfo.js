import React, { Component } from 'react';
import '../App.css';
import { getPatient } from '../services/apiServices';
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
      <div className="formwrapper">
        <div>
          <h1>Client Information</h1>
        </div>
        <div><FormContainer />
        </div>
      </div>
    )
  }
}

export default ClientInfo