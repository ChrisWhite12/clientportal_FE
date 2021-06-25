import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Nav } from 'react-bootstrap';

import {useGlobalState} from "../../config/store"
import {loginUser} from "../../services/authServices"

const Login = ({history}) => {
    const [userDetails, setUserDetails] = useState()
    const [message,setMessage] = useState('')
    const {dispatch} = useGlobalState()

    function handleChange(event){
        const name = event.target.name
        const value = event.target.value

        setUserDetails({
            ...userDetails,
            [name]: value
        })
        // console.log(userDetails)
    }

    function handleSubmit(event){
        event.preventDefault()
        loginUser(userDetails)
            .then((resData) => {
                console.log('resData',resData);
                dispatch({
                    type: "setLoggedInUser",
                    data: userDetails.email,
                    role: resData.user.role
                })
                history.push('/dashboard')
            })
            .catch((err) => {
                setMessage('Invalid email or password')
            })
    }

    return (
        <div className="main_sec">
            <h1 className="mainheader">Welcome to the Brain Train Client Portal</h1>
            <form className="login_card" onSubmit={handleSubmit}>
                <input className="login_fields" name="email" onChange={handleChange} type="text" placeholder="email"></input>
                <input className="login_fields" name="password" onChange={handleChange} type="password" placeholder="password"></input>
                <p className='msgText'>{message}</p>
                <div>
                    <input type="checkbox"></input>
                    <label className="label"> Remember Me</label>
                </div>
                <Link to="/forgot_password">
                    Forgot password
                </Link>
                <input className="login_btn" type="submit" value="Log In"></input>
                <Link className="sign_up_btn" to="./Register">
                    Sign Up
                </Link>
            </form>
        </div>
    )
}

export default Login