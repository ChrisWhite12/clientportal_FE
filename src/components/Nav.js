import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { useGlobalState } from '../config/store'
import {logoutUser} from '../services/authServices'

const Nav = () => {

    const {dispatch,store} = useGlobalState()

    const onLogout = () => {
        console.log('logout')
        logoutUser()
            .then((res) => {
                console.log("res", res)
            })
            .catch((err) => {
                console.log("err", err)
            })
        dispatch({
            type: "setLoggedInUser",
            data: null
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
                <Link to="/">
                    Dashboard
                </Link>
            </ul>
        </nav>
    )
}

export default Nav