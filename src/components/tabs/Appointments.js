import React, {useEffect, useState} from 'react'

import { useGlobalState } from '../../config/store';

import { createTicket } from '../../services/ticketServices';
import timeConvert from '../../utils/timeConvert';

const Appointments = () => {
    const [data, setData] = useState({})

    const { store } = useGlobalState()

    const clickTicket = (event) => {
        console.log('creating ticket')
        console.log(event.target.value)

        const apptTicketInfo = data.appointments.filter(el2 => el2.id === event.target.value)

        console.log('apptInfo', apptTicketInfo)

        //TODO add name and other info
        createTicket({
            username: apptTicketInfo[0].patient_name,
            contact: data.patient.patient_phone_numbers[0].number,
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
        const {patientInfo} = store
        setData(patientInfo)
        
    }, [store])


    return (
        <div className="apptwrapper">
            <h1>Appointments</h1>
            {data.appointments && data.appointments.map((el) => {
                const {dateStart, hrStart, minStart, hrEnd, minEnd} = timeConvert(el.starts_at, el.ends_at)
                return <div key={`key_${el.id}`}>
                        <table>
                            <tr>
                                <th>Appointment Date</th>
                                <th>Start</th>
                                <th>End</th>
                                <th>Request Change of Date or Time</th>
                            </tr>
                            <tr>
                                <td>{dateStart}</td>
                                <td>{hrStart}:{minStart}</td>
                                <td>{hrEnd}:{minEnd}</td>
                                <button value={el.id} id="create_ticket" onClick={(event) => clickTicket(event)}>
                                Make Change Request
                                </button>
                            </tr>
                        </table>
                    </div>
            })}
        </div>
    )
}

export default Appointments