import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import { useGlobalState } from '../config/store'
import {logoutUser} from '../services/authServices'

const Nav = () => {

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
        // dispatch({
        //     type: "setLoggedInUser",
        //     data: null
        // })
    }

    return (
        <nav>
            <ul className="nav-links">
                {(loggedInUser)? 
                    <p>{loggedInUser}</p>
                    :
                    (<Link to="/sign_in">
                        Sign in
                    </Link>)
                }
                
                {(!loggedInUser)? 
                    <Link to="/register">
                        Register
                    </Link>
                    :
                    <button id="logout_btn" onClick={onLogout}>
                        Logout
                    </button>
                }
                
            </ul>
        </nav>
    )
}

export default Nav