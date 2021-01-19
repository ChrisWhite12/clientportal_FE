import React, { Component } from 'react'

import { StateContext } from '../config/store';

import { Button } from './FormComponents';

import { Link } from 'react-router-dom';

import '../App.css';

class UserInfo extends Component{
    static contextType = StateContext

    constructor(props){
        super(props)
        this.state = {
            patientInfo: [],
        }
    }

    componentDidMount() {
        const patientInfo = this.context.store.patientInfo.patient
        console.log(patientInfo)
        this.setState({patientInfo})
    }

    render(){
        const {patientInfo} = this.state

        return (
             <div className="displayinfowrapper">        
                <h1>Client Information</h1>
                    <div className="fieldnames">Client ID Number:</div><div className="displaytextbox">{patientInfo.id}</div>
                    <div className="fieldnames">Client First Name:</div><div className="displaytextbox">{patientInfo.first_name}</div>
                    <div className="fieldnames">Client Last Name:</div><div className="displaytextbox">{patientInfo.last_name}</div>
                    <div className="fieldnames">Client Address:</div><div className="displaytextbox">{patientInfo.address_1}</div>
                    <div className="fieldnames">Client Date of Birth:</div><div className="displaytextbox">{patientInfo.date_of_birth}</div>
                    <div className="fieldnames">Client Sex:</div><div className="displaytextbox">{patientInfo.sex}</div>
                    <div className="fieldnames">Emergency Contact:{patientInfo.emergency_contact}</div>
                    <Link to="/dashboard/info/edit">
                    <Button 
                        type = {'primary'} 
                        title = {'Edit'} 
                        /> 
                    </Link>
            </div>

        )
    }
}

export default UserInfo