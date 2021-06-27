import React, {useCallback, useEffect, useState} from 'react'

import { useGlobalState } from '../../config/store';
import { getTicket } from '../../services/ticketServices'
import Appointment from '../Appointment';

const Appointments = () => {
    const [data, setData] = useState({})
    const { store, dispatch } = useGlobalState()
    const [isLoading, setIsLoading] = useState(true)
    const {patientInfo} = store
    
    useEffect(() => {
        setData(patientInfo)
        setIsLoading(false)
    }, [store])


    return (
        <div className="apptwrapper">
            <h1>Appointments</h1>
            <div className='appHeaderRow'>
                <p>Date</p>
                <p>Start</p>
                <p>End</p>
                <p>Appointment</p>
                <p>Request Change of Date or Time</p>
            </div>
            {!isLoading && data.appointments && data.appointments.map((el) => {
                return <Appointment 
                key = {`key_${el.id}`} 
                appData = {el}
                number = {data.patient.patient_phone_numbers[0].number} 
                />
            })}
        </div>
    )
}

export default Appointments