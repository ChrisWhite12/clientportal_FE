import React, {Component, useState} from 'react'
import {useGlobalState} from "../config/store"

const Login = ({history}) => {
    const [userDetails, setUserDetails] = useState()
    const {store,dispatch} = useGlobalState()

    function handleChange(event){
        const name = event.target.name
        const value = event.target.value

        setUserDetails({
            ...userDetails,
            [name]: value
        })
        console.log(userDetails)
    }

    function handleSubmit(event){
        event.preventDefault()
        dispatch({
            type: "setLoggedInUser",
            data: userDetails.email
        })

        console.log(store)
        history.push('/')
    }

    return (
        <div className="main_sec">
            <h1>Welcome to the Brain Train Client Portal</h1>
            <form className="login_card" onSubmit={handleSubmit}>
                <input className="login_fields" name="email" onChange={handleChange} type="text" placeholder="email"></input>
                <input className="login_fields" name="pass" onChange={handleChange} type="password" placeholder="password"></input>
                <div>
                    <input type="checkbox"></input>
                    <label> Remember Me</label>
                </div>
                <a>Forgot Password</a>
                <input id="login_btn" type="submit" value="Log In"></input>
                <input id="sign_up_btn" type="button" value="Sign Up"></input>
            </form>
        </div>
    )
}

export default Login