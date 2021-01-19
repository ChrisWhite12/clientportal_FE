import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import { useGlobalState } from '../config/store'
import {logoutUser} from '../services/authServices'

const LogoutBtn = () => {


    const {dispatch,store} = useGlobalState()
    const {loggedInUser} = store
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
    }

    return (
        <div>
            {loggedInUser ? 
            (<button id="logout_btn" onClick={onLogout}>
                Logout
            </button>) : (<p></p>)}
        </div>
        
    )
}

export default LogoutBtn