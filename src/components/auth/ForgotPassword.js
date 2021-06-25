import React, {useState} from 'react'
import {forgotPassword} from "../../services/authServices"

const ForgotPassword = () => {

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState(null)

    const handleChange = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('email', email)
        forgotPassword(email).then(() => {
            console.log('submit')
            setMessage('Link sent')
        })
        .catch((err) => {
            console.log('err', err)
            setMessage('Email not valid')

        })
    }

    return (
        <div className="main_sec">
            <h1>Password Reset</h1>
            <form className="login_card" onSubmit={handleSubmit}>
                <input className="login_fields" name="email" onChange={handleChange} type="text" placeholder="email"></input>
                <p className='msgText'>{message}</p>
                <input id="forgot_password_btn" type="submit"></input>
            </form>
        </div>
    )
}

export default ForgotPassword