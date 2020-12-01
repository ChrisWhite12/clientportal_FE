import React, {Component, useState} from 'react'
import {useGlobalState} from "../config/store"

const Register = ({history}) => {

    const [userDetails, setUserDetails] = useState()
    const {store, dispatch} = useGlobalState()

    function handleChange(event){
        const name = event.target.name
        const value = event.target.value
        setUserDetails({
            ...userDetails,
            [name]: value
        })
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
                <input className="login_fields" name="email" type="text" placeholder="email" onChange={handleChange}></input>
                <input className="login_fields" name="pass" type="password" placeholder="password" onChange={handleChange}></input>
                <input className="login_fields" name="pass_conf" type="password" placeholder="confirm password" onChange={handleChange}></input>
                <div>
                    <input type="checkbox"></input>
                    <label>Agree to terms and conditions</label>
                </div>
                <input id="sign_up_btn" type="submit" value="Sign Up"></input>
            </form>
        </div>
    )
}

export default Register