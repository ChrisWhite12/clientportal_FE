import React, {Component, useState} from 'react'
import {useGlobalState} from "../config/store"
import {registerUser} from "../services/authServices"

const Register = ({history}) => {

    const [userDetails, setUserDetails] = useState({
        password: '',
        password_confirm: ''
    })
    const [message,setMessage] = useState('')
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
        if(userDetails["password"] === userDetails["password_confirm"]){
            registerUser(userDetails)
                .then(() => {
                    dispatch({
                        type: "setLoggedInUser",
                        data: userDetails.email
                    })
                    history.push('/dashboard')
                })
                .catch((err) => {
                    console.log(err.response.data.error)
                    setMessage(err.response.data.error)
                })
        }
        else{
            console.log('fail - password do not match')
        }
    }

    return (
        <div className="main_sec">
            <h1 className="mainheader">Welcome to the Brain Train Client Portal</h1>
            <form className="login_card" onSubmit={handleSubmit}>
                <input className="login_fields" name="email" type="text" placeholder="email" onChange={handleChange}></input>
                <input className="login_fields" name="password" type="password" placeholder="password" onChange={handleChange}></input>
                <input className="login_fields" name="password_confirm" type="password" placeholder="confirm password" onChange={handleChange}></input>
                {!userDetails["password"] ? <p></p> : (userDetails["password"] === userDetails["password_confirm"])? <p style={{color: "green"}}>passwords match</p>: <p style={{color: "red"}}>passwords don't match</p>}
                {message}
                <div>
                    <input type="checkbox"></input>
                    <label className="label">Agree to terms and conditions</label>
                </div>
                <input className="sign_up_btn" type="submit" value="Sign Up"></input>
            </form>
        </div>
    )
}

export default Register