import React, { useEffect} from 'react';
import {useGlobalState} from '../config/store';
import '../App.css';
import { Nav } from 'react-bootstrap';
import { getPatient } from '../services/apiServices';
import ClientInfo from './ClientInfo';
import UserInfo from './UserInfo';
import Home from './Home';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
} from 'react-router-dom'
import Appointments from './Appointments';
import Notifications from './Notifications';

    
const Dashboard = () => {

    const {dispatch} = useGlobalState()

    let {path,url} = useRouteMatch()

    useEffect(() => {
        console.log("getting patient info")
        getPatient()
        .then((data) => {
            console.log(data)
            dispatch({
                type: "setPatientInfo",
                data: data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    return (
        <div className="sidenavcontainer">
        <Router>
            <Nav defaultActiveKey="/" className="flex-column" id="sidenav">
                <Nav.Link as={Link} className="sidenav_btn" id="d" eventKey="link-1" to={`${url}/`}>Dashboard</Nav.Link>
                <Nav.Link as={Link} className="sidenav_btn" id="ci" eventKey="link-1" to={`${url}/info`}>Client Info</Nav.Link>
                <Nav.Link as={Link} className="sidenav_btn" id="ba" eventKey="link-2" to={`${url}/appointments`}>Booked Appointments</Nav.Link>
                <Nav.Link as={Link} className="sidenav_btn" id="n" eventKey="link-3" to={`${url}/notifications`}>Notifications</Nav.Link>
            </Nav>

            <Switch>
                <Route exact path={`${path}`} component={Home}/>
                <Route exact path={`${path}/info/edit`} component={ClientInfo}/>
                <Route path={`${path}/appointments`} component={Appointments}/>
                <Route path={`${path}/notifications`} component={Notifications}/>
                <Route exact path={`${path}/info`} component={UserInfo}/>
            </Switch>
        </Router>
        </div>
        );
}

export default Dashboard;