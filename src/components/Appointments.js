// import React, { Component } from 'react';
// import { StateContext } from '../config/store';

// class Appointments extends Component{
//     static contextType = StateContext 

//     constructor(props){
//         super(props)
//         this.state = {
//             patientInfo: {},
//             appointInfo: []
//         }
//     }

//     componentDidMount() {
//         // const patientInfo = this.context.store.patientInfo.patient
//         const appointInfo = this.context.store.patientInfo.appointments
//         // console.log(patientInfo)
//         console.log(appointInfo)
//         this.setState({appointInfo: appointInfo.map((el) => {
//             return <p key={`key_${el.id}`}>{el.id}
//                     {el.starts_at}{el.ends_at}</p>
//         })})
//     }

//     render () {
//         const {appointInfo} = this.state
//         return (
//             <div>
//                 <h1>Appointments</h1>
//                 {appointInfo}
//             </div>
    
    
    
// }

// export default Appointments;

import React, {Component} from 'react'

import { StateContext } from '../config/store';

class Appointments extends Component{
    static contextType = StateContext

    constructor(props){
        super(props)
        this.state = {
            patientInfo: {},
            appointInfo: []
        }
    }

    componentDidMount() {
        // const patientInfo = this.context.store.patientInfo.patient
        const appointInfo = this.context.store.patientInfo.appointments
        // console.log(patientInfo)
        console.log(appointInfo)
        this.setState({appointInfo: appointInfo.map((el) => {
            return <p key={`key_${el.id}`}>
                        <table>
                            <tr>
                                <th>Appointment ID</th>
                                <th>Appointment Start Date and Time</th>
                                <th>Appointment Start Date and Time</th>
                            </tr>
                            <tr>
                                <td>{el.id}</td>
                                <td>{el.starts_at}</td>
                                <td>{el.ends_at}</td>
                            </tr>
                        </table>
                    </p>
        })})
    }

    render(){
        const {appointInfo} = this.state

        return (
            <div>
                <h1>Appointments</h1>
                {appointInfo}
            </div>
        )
    }
}

export default Appointments