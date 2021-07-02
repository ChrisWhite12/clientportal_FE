import React, {useState} from 'react'
import {forgotPassword} from "../../services/authServices"
import validate from 'validate.js'

const ForgotPassword = () => {
    //TODO validate js

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState(null)

    const handleChange = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const valEmail = validate({from: email}, {from: {
            email: true
        }})
        
        if(valEmail){
            forgotPassword(email).then(() => {
                console.log('submit')
                setMessage('Link sent')
            })
            .catch((err) => {
                console.log('err', err)
                setMessage('Email not valid')
    
            })
        }
        else{
            console.log('valEmail',valEmail);
            setMessage(valEmail.email[0])
        }
    }

    return (
        <div className="main_sec">
            <h1>Password Reset</h1>
            <form className="login_card" onSubmit={handleSubmit}>
                <input className="login_fields" name="email" onChange={handleChange} type="text" placeholder="email"></input>
                <p className='msgText'>{message}</p>
                <input className="forgot_pass_btn" type="submit"></input>
            </form>
        </div>
    )
}

export default ForgotPassword