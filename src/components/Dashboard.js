import React, {Component, useEffect} from 'react';
import {useGlobalState} from '../config/store';
import '../App.css';
// react-bootstrap components
import {Container, Row, Col, Nav} from 'react-bootstrap';
import SideNav from "../components/SideNav.js";
import Test from "../components/api.js"
import { getProfile } from '../services/profileServices';
import { getPatients } from '../services/apiServices';
import ClientInfo from './ClientInfo';
import Home from './Home';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from 'react-router-dom'
import Appointments from './Appointments';
import Notifications from './Notifications';

    
const Dashboard = () => {

    const {store} = useGlobalState()
    const {loggedInUser} = store

    const dummy_appointment = {date: "1/1/21", time: "10:00am", location: "1 Main St"}
    let {path,url} = useRouteMatch()

    return (
        <div className="main_sec">
        <Router>
            <Container id="Dashboard" fluid="md">
                <Row>
                    <Col className="col-4 text-light bg-dark">  
                        <Nav defaultActiveKey="/" className="flex-column">
                            <Nav.Link as={Link} className="border border-light solid rounded p-3" eventKey="link-1" to={`${url}/`}>Dashboard</Nav.Link>
                            <Nav.Link as={Link} className="border border-light solid rounded p-3" eventKey="link-1" to={`${url}/info`}>Client Info</Nav.Link>
                            <Nav.Link as={Link} className="border border-light solid rounded p-3" eventKey="link-2" to={`${url}/appointments`}>Booked Appointments</Nav.Link>
                            <Nav.Link as={Link} className="border border-light solid rounded p-3" eventKey="link-3" to={`${url}/notifications`}>Notifications</Nav.Link>
                        </Nav>
                    </Col>


                    <Col className="col-8 text-light bg-dark">
                        <Switch>
                            <Route exact path={`${path}`} component={Home}/>
                            <Route path={`${path}/info`} component={ClientInfo}/>
                            <Route path={`${path}/appointments`} component={Appointments}/>
                            <Route path={`${path}/notifications`} component={Notifications}/>
                        </Switch>
                    </Col>

                </Row>
            </Container>
        </Router>
        </div>
        );
}

export default Dashboard;
