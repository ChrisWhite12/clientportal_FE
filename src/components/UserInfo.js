import React, {Component} from 'react'

import { StateContext } from '../config/store';

class UserInfo extends Component{
    static contextType = StateContext

    constructor(props){
        super(props)
        this.state = {
            patientInfo: [],
            // appointInfo: []
        }
    }

    componentDidMount() {
        const patientInfo = this.context.store.patientInfo.patient
        // const appointInfo = this.context.store.patientInfo.appointments
        console.log(patientInfo)
        // console.log(appointInfo)
        this.setState({patientInfo})
        // this.setState({patientInfo: patientInfo((el) => {
        //     return <p key={`key_${el.id}`}>{el.id}</p>
        // })})
    }

    render(){
        const {patientInfo} = this.state

        return (
            <div>
                <h1>Client Information</h1>
                {patientInfo.id}
            </div>
        )
    }
}

export default UserInfo