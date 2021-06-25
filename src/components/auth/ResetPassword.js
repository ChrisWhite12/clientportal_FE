import React, { useEffect, useState } from 'react'

import {useGlobalState} from "../../config/store"
import { resetToken, updateUser } from '../../services/authServices'

const ResetPassword = ({history, match}) => {

    const {dispatch} = useGlobalState()

    const [userDetails, setUserDetails] = useState({
        password: '',
        password_confirm: ''
    })
    const [message,setMessage] = useState('')
    const [errorState, setErrorState] = useState(false)

    useEffect(() => {
        console.log(match.params.token)
        resetToken(match.params.token)
            .then(() => {
                console.log('token ok')
            })
            .catch((err) => {
                console.log('token invalid')
                setErrorState(true)
                setMessage('Token Invalid')
            })
    },[])

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
            updateUser(userDetails, match.params.token)
                .then(() => {
                    dispatch({
                        type: "setLoggedInUser",
                        data: userDetails.email
                    })
                    history.push('/sign_in')
                })
                .catch((err) => {
                    setMessage(`Error !! Can't reset password try again!`)
                })
        }
        else{
            console.log('fail - password do not match')
        }
    }

    

    return (
        <div className="main_sec">
            <h1 className="mainheader">Password Reset</h1>
            <form className="login_card" onSubmit={handleSubmit}>
            {(!errorState)?(  
                <div>
                    <input className="login_fields" name="email" onChange={handleChange} type="text" placeholder="email"></input>
                    <input className="login_fields" name="password" onChange={handleChange} type="password" placeholder="password"></input>
                    <input className="login_fields" name="password_confirm" onChange={handleChange} type="password" placeholder="password confirm"></input>
                    {!userDetails["password"] ? <p></p> : (userDetails["password"] === userDetails["password_confirm"])? <p style={{color: "green"}}>passwords match</p>: <p style={{color: "red"}}>passwords don't match</p>}
                    <p>{message}</p>
                    <input id="forgot_password_btn" type="submit"></input>
                </div>
                ):
            (<p>{message}</p>)}
            </form>
        </div>
    )
}

export default ResetPassword