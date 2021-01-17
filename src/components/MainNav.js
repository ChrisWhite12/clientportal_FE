import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import { useGlobalState } from '../config/store'
import {logoutUser} from '../services/authServices'
import { getPatient, updatePatient } from '../services/apiServices';
const Nav = () => {

    const {dispatch} = useGlobalState()
    const history = useHistory()

    const onLogout = () => {
        console.log('logout')
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
        // dispatch({
        //     type: "setLoggedInUser",
        //     data: null
        // })
    }

    const handleApiRead = () => {
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
    }

    const handleUpdatePatient = () => {
        console.log("updating patient info")
        let patientInfo = {
            "address_1": '1 test st',
            "address_2": "blah"
        }
        updatePatient(patientInfo)
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <nav>
            <ul className="nav-links">
                <Link to="/sign_in">
                    Sign in
                </Link>
                <Link to="/register">
                    Register
                </Link>
                <button id="logout_btn" onClick={onLogout}>
                    Logout
                </button>
                <button id="api_btn" onClick={handleApiRead}>
                    Api Test
                </button>
                <button id="update_patient_btn" onClick={handleUpdatePatient}>
                    Update patient
                </button>
                <Link to="/dashboard">
                    Dashboard
                </Link>
                <Link to="/users">
                    Users
                </Link>
                
            </ul>
        </nav>
    )
}

export default Nav