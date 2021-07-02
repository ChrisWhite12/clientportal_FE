import React, { useEffect, useState } from 'react'

import {useGlobalState} from '../../config/store';
import timeConvert from '../../utils/timeConvert';

// import {Container, Row, Col} from 'react-bootstrap';

const Home = () => {

    const {store} = useGlobalState()
    const {loggedInUser, patientInfo, pracInfo, role} = store
    const [timeObj, setTimeObj] = useState()

    useEffect(() => {
        if(role === 'user'){
            setTimeObj(timeConvert(patientInfo.appointments[0]?.appointment_start, patientInfo.appointments[0]?.appointment_end))
        }
        else if(role === 'admin'){
            setTimeObj(timeConvert(pracInfo.appointments[0]?.appointment_start, pracInfo.appointments[0]?.appointment_end))
        }
    },[patientInfo, pracInfo, role])

    return (
        <div className="home">
            <h1>Welcome {loggedInUser}</h1>
            <div id="nxtappt">
                <h3>Next Appointment</h3>
                <p>Your Next Appointment Is:</p>
                {(timeObj && ((patientInfo && patientInfo.appointments.length > 0) || (pracInfo && pracInfo.appointments.length > 0)))?
                    <div>
                        <p>{timeObj.dateStart}</p>
                        <p>{timeObj.hrStart}:{timeObj.minStart} to {timeObj.hrEnd}:{timeObj.minEnd}</p>
                    </div>
                 : <></>}
            </div>
        </div>
    )
}

export default Home