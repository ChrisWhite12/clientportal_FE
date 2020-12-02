import React, {Component, useState} from 'react'
import {Link} from 'react-router-dom'

const ResetPassword = () => {

    const [userDetails, setUserDetails] = useState({
        password: '',
        password_confirm: ''
    })

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        setUserDetails({
            ...userDetails,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(userDetails["password"] === userDetails["password_confirm"]){
            console.log('success')
        }
        else{
            console.log("fail")
        }
    }

    return (
        <div className="main_sec">
            <h1>Password Reset</h1>
            <form className="login_card" onSubmit={handleSubmit}>
                <input className="login_fields" name="password" onChange={handleChange} type="password" placeholder="password"></input>
                <input className="login_fields" name="password_confirm" onChange={handleChange} type="password" placeholder="password confirm"></input>
                {!userDetails["password"] ? <p></p> : (userDetails["password"] === userDetails["password_confirm"])? <p style={{color: "green"}}>passwords match</p>: <p style={{color: "red"}}>passwords don't match</p>}
                <input id="forgot_password_btn" type="submit"></input>
            </form>
        </div>
    )
}

export default ResetPassword