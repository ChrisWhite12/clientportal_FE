import React, {Component, useEffect} from 'react';
import {useGlobalState} from '../config/store';
import '../App.css';
// react-bootstrap components
import {Container, Row, Col} from 'react-bootstrap';
import SideNav from "../components/SideNav.js";
import Test from "../components/api.js"
import {getApiData} from "../services/authServices"

    
const Dashboard = () => {

    const {store} = useGlobalState()
    const {loggedInUser} = store

    const dummy_appointment = {date: "1/1/21", time: "10:00am", location: "1 Main St"}

    //test API by calling getApiData from backend
    useEffect(() => {
        getApiData().then((data) => {
            console.log(data)
        })
        .catch((err) => {console.log(err)})
    },[])
    
    return (
        <div className="main_sec">
        <Container id="Dashboard" fluid="md">
            <Row>
                <Col className="col-4 text-light bg-dark">  
                    <SideNav />
                </Col>
                <Col className="col-8 text-light bg-dark">
                    <h1>Welcome {loggedInUser}</h1>
                    <Container fluid="xl" className="border border-light solid rounded p-3">
                        <Row>
                            <h3>Next Appointment</h3>
                        </Row>
                        <Row>
                            <p>Your Next Appointment Is: {dummy_appointment["date"]} -- {dummy_appointment["time"]} -- {dummy_appointment["location"]}</p>
                        </Row>
                        <Row>
                            {/* <Test /> */}
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
        </div>
        );
}

export default Dashboard;
