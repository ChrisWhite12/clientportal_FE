import React, { useEffect, useState} from 'react'

import { useGlobalState } from '../../config/store';
import Appointment from '../Appointment';

const Appointments = () => {
    const [data, setData] = useState({})
    const { store } = useGlobalState()
    const [isLoading, setIsLoading] = useState(true)
    const {patientInfo, pracInfo, role} = store
    
    useEffect(() => {
        if(role === 'user'){
            setData(patientInfo)
        }
        else if(role === 'admin'){
            setData(pracInfo)
        }
        setIsLoading(false)
    }, [store, patientInfo, pracInfo, role])


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
                // number = {data.patient.patient_phone_numbers[0].number} 
                />
            })}
        </div>
    )
}

export default Appointments