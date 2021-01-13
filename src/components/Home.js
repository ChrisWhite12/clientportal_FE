import React, {Component} from 'react'

import {useGlobalState} from '../config/store';

import {Container, Row, Col} from 'react-bootstrap';

const Home = () => {

    const {store} = useGlobalState()
    const {loggedInUser, patientInfo} = store

    const dummy_appointment = {date: "1/1/21", time: "10:00am", location: "1 Main St"}
    // console.log(patientInfo.appointments[0])

    return (
        <div>
            <h1>Welcome {loggedInUser}</h1>
            <Container fluid="xl" className="border border-light solid rounded p-3">
                <Row>
                    <h3>Next Appointment</h3>
                </Row>
                <Row>
                    <p>Your Next Appointment Is: {dummy_appointment["date"]} -- {dummy_appointment["time"]} -- {dummy_appointment["location"]}</p>
                </Row>
                <Row>
                    {(patientInfo.appointments.length > 0)?<p>{patientInfo.appointments[0].appointment_start} to {patientInfo.appointments[0].appointment_end}</p>: <p></p>}
                </Row>
            </Container>
        </div>
    )
}

export default Home