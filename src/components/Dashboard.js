import React, { useEffect, useState } from 'react';
import {useGlobalState} from '../config/store';
import '../App.css';
import { Nav } from 'react-bootstrap';

import { getPatient } from '../services/apiServices';
import {logoutUser} from '../services/authServices'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useHistory,
} from 'react-router-dom'

import Appointments from './tabs/Appointments';
import Notifications from './tabs/Notifications';
import UserInfo from './tabs/UserInfo';
import Home from './tabs/Home';

    
const Dashboard = () => {

    const {dispatch, store} = useGlobalState()
    const [loading, setLoading] = useState(true)

    let {path,url} = useRouteMatch()
    const history = useHistory()

    const {role} = store 

    useEffect(() => {
        console.log("getting patient info")
        getPatient()
        .then((data) => {
            console.log(data)
            dispatch({
                type: "setPatientInfo",
                data: data
            })
            setLoading(false)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const handleLogout = ()  => {
        logoutUser()
            .then((res) => {
                console.log("res", res)
                dispatch({
                    type: "setLoggedInUser",
                    data: null
                })
                history.push('/sign_in')
            })
            .catch((err) => {
                console.log("err", err)
            })
    }

    return (
        <div className="sidenavcontainer">
        <Router>
            <Nav defaultActiveKey="/" className="flex-column" id="sidenav">
                <Nav.Link as={Link} className="sidenav_btn" id="d" eventKey="link-1" to={`${url}/`}>Dashboard</Nav.Link>

                {role === 'user' 
                    ? <Nav.Link as={Link} className="sidenav_btn" id="ci" eventKey="link-1" to={`${url}/info`}>Client Info</Nav.Link> 
                    : <></>}

                <Nav.Link as={Link} className="sidenav_btn" id="ba" eventKey="link-2" to={`${url}/appointments`}>Booked Appointments</Nav.Link>
                
                {role === 'admin' 
                ? <Nav.Link as={Link} className="sidenav_btn" id="n" eventKey="link-3" to={`${url}/notifications`}>Notifications</Nav.Link> 
                : <></>}
                
                <Nav.Link as={Link} className="sidenav_btn" id="lo" eventKey="link-4" to={`${url}/`} onClick={handleLogout}>Logout</Nav.Link>
            </Nav>

            {loading ? 
                <p>Loading ... </p>
            :
                <Switch>
                    <Route exact path={`${path}`} component={Home}/>
                    <Route path={`${path}/appointments`} component={Appointments}/>
                    <Route path={`${path}/notifications`} component={Notifications}/>
                    <Route exact path={`${path}/info`} component={UserInfo}/>
                </Switch>
            }
        </Router>
        </div>
        );
}

export default Dashboard;