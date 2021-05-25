import React, {Component, useState} from 'react'

import { StateContext, useGlobalState } from '../config/store';

import { createTicket } from '../services/ticketServices';

const Appointments = () => {
    const [appointRender, setAppointRender] = useState([])
    const [data, setData] = useState([])

    const {dispatch, store} = useGlobalState()

    const clickTicket = (event) => {
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
    }

    useEffect(() => {
        // const patientInfo = this.context.store.patientInfo.patient
        const {patientInfo} = store
        // this.state.data = this.context.store.patientInfo.appointments
        setData(patientInfo.appointments)

        // console.log(patientInfo)
        console.log('patient appointments -',data)

        setAppointRender(data.map((el) => {
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
                                <button value={el.id} id="create_ticket" onClick={(event) => clickTicket(event)}>
                                Make Change Request
                                </button>
                            </tr>
                        </table>
                    </p>
        }))
    }, [])


    return (
        <div className="apptwrapper">
            <h1>Appointments</h1>
            {appointRender}
        </div>
    )
}

export default Appointments