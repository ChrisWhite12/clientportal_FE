import React from 'react'

import {useGlobalState} from '../config/store';

// import {Container, Row, Col} from 'react-bootstrap';

const Home = () => {

    const {store} = useGlobalState()
    const {loggedInUser, patientInfo} = store
    const history = useHistory()

    // const dummy_appointment = {date: "1/1/21", time: "10:00am", location: "1 Main St"}
    // console.log(patientInfo.appointments[0])

    return (
        <div className="home">
            <h1>Welcome {loggedInUser}</h1>
            <div id="nxtappt">
                <h3>Next Appointment</h3>
                <p>Your Next Appointment Is:{(patientInfo.appointments.length > 0)?<p>{patientInfo.appointments[0].appointment_start} to {patientInfo.appointments[0].appointment_end}</p>: <p></p>}</p>
            </div>
        </div>
    )
}

export default Home