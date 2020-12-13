import React, {Component} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { useGlobalState } from '../config/store'
import {logoutUser} from '../services/authServices'
import {createProfile} from '../services/profileServices'

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
            userId: "1",
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
                <Link to="/">
                    Dashboard
                </Link>
            </ul>
        </nav>
    )
}

export default Nav