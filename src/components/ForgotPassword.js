import React, {Component, useState} from 'react'
import {Link} from 'react-router-dom'

const ForgotPassword = () => {

    const [email, setEmail] = useState('')

    const handleChange = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submit')
    }

    return (
        <div className="main_sec">
            <h1>Password Reset</h1>
            <form className="login_card" onSubmit={handleSubmit}>
                <input className="login_fields" name="email" onChange={handleChange} type="text" placeholder="email"></input>
                <input id="forgot_password_btn" type="submit"></input>
            </form>

            <Link to="/reset_password">
                reset password
            </Link>
        </div>
    )
}

export default ForgotPassword