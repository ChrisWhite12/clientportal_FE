import React from 'react'

import {useGlobalState} from '../../config/store';
import timeConvert from '../../utils/timeConvert';

// import {Container, Row, Col} from 'react-bootstrap';

const Home = () => {

    const {store} = useGlobalState()
    const {loggedInUser, patientInfo} = store

    const {dateStart, hrStart, minStart, hrEnd, minEnd} = timeConvert(patientInfo.appointments[0]?.appointment_start, patientInfo.appointments[0]?.appointment_end)

    //TODO change time to date string
    return (

        <div className="home">
            <h1>Welcome {loggedInUser}</h1>
            <div id="nxtappt">
                <h3>Next Appointment</h3>
                <p>Your Next Appointment Is:</p>
                {(patientInfo.appointments.length > 0)?
                    <div>
                        <p>{dateStart}</p>
                        <p>{hrStart}:{minStart} to {hrEnd}:{minEnd}</p>
                    </div>
                 : <p>''</p>}
            </div>
        </div>
    )
}

export default Home