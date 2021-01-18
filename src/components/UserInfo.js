import React, {Component} from 'react'

import { StateContext } from '../config/store';

import { Button } from './FormComponents';

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
            <div>
                <h1>Client Information</h1>
                {patientInfo.id}
                {patientInfo.first_name}
                {patientInfo.last_name}
                {patientInfo.address_1}
                {patientInfo.date_of_birth}
                {patientInfo.gender}
                {patientInfo.emergency_contact}
                <Button 
                    // action = {this./*enter route path here */}
                    type = {'primary'} 
                    title = {'Edit'} 
                    /> 
            </div>
        )
    }
}

export default UserInfo