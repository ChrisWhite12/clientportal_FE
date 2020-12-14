import React, {Component} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { useGlobalState } from '../config/store'
import { getPatients } from '../services/apiServices'
import {logoutUser} from '../services/authServices'
import {createProfile, getProfile, updateProfile } from '../services/profileServices'
import { createTicket, getTicket } from '../services/ticketServices'

const Nav = () => {

    const {dispatch,store} = useGlobalState()
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

    const clickProfile = () => {
        console.log('creating profile')
        createProfile({
            firstName: "chris",
            lastName: "white",
            contact: "123456",
            address: "1 First St"
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const clickTicket = () => {
        console.log('creating ticket')
        createTicket({
            appId: "1",
            appDate: "1/1/21",
            status: "pending",
            notified: false,
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const clickProfile_read = () => {
        console.log('reading profile')
        getProfile()
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const clickTicket_read = () => {
        console.log('reading ticket')
        getTicket()
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const updateProfile_btn = () => {
        console.log('updating profile')
        
        updateProfile({
            contact: "111111111"
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const readPatients_btn = () => {
        console.log('reading patients')
        
        getPatients()
            .then((res) => {
                console.log(res)
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
                <button id="create_profile" onClick={clickProfile}>
                    Create Profile
                </button>
                <button id="create_ticket" onClick={clickTicket}>
                    Create Ticket
                </button>
                <button id="read_profile" onClick={clickProfile_read}>
                    Read Profile
                </button>
                <button id="read_ticket" onClick={clickTicket_read}>
                    Read Ticket
                </button>
                
            </ul>
            <ul className="nav-links">
                <button id="update_profile" onClick={updateProfile_btn}>
                    Update Profile
                </button>
                <button id="read_patients" onClick={readPatients_btn}>
                    API test - Patients
                </button>
                <Link to="/">
                    Dashboard
                </Link>

            </ul>
        </nav>
    )
}

export default Nav