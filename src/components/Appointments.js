import React, {Component} from 'react'

import { StateContext } from '../config/store';

import { createTicket } from '../services/ticketServices';

class Appointments extends Component{
    static contextType = StateContext

    constructor(props){
        super(props)
        this.state = {
            patientInfo: {},
            appointInfo: [],
            data: [],
        }
    }

        clickTicket = (event) => {
            console.log('creating ticket')
            console.log(event.target.value)
                const apptTicketInfo = this.state.data.filter(el2 => el2.id == event.target.value)
                console.log(apptTicketInfo)
            createTicket({
                appId: apptTicketInfo[0].id,
                appDate: apptTicketInfo[0].starts_at,
                status: "pending",
                notified: false,
            })
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
            // setCount(count + 1)
        }

    componentDidMount() {
        // const patientInfo = this.context.store.patientInfo.patient
        this.state.data = this.context.store.patientInfo.appointments
        // console.log(patientInfo)
        console.log(this.state.data)
        this.setState({appointInfo: this.state.data.map((el) => {
            return <p key={`key_${el.id}`}>
                        <table>
                            <tr>
                                <th>Appointment ID</th>
                                <th>Appointment Start Date and Time</th>
                                <th>Appointment Start Date and Time</th>
                                <th>Request Change of Appointment Date or Time</th>
                            </tr>
                            <tr>
                                <td>{el.id}</td>
                                <td>{el.starts_at}</td>
                                <td>{el.ends_at}</td>
                                <button value={el.id} id="create_ticket" onClick={(event) => this.clickTicket(event)}>
                                Make Change Request
                                </button>
                            </tr>
                        </table>
                    </p>
        })})
    }

    render(){
        const {appointInfo} = this.state

        return (
            <div className="apptwrapper">
                <h1>Appointments</h1>
                {appointInfo}
            </div>
        )
    }
}

export default Appointments