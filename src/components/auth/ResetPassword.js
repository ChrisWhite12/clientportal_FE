import React, { useEffect, useState } from 'react'

import {useGlobalState} from "../../config/store"
import { resetToken, updateUser } from '../../services/authServices'
import { validate } from 'validate.js'

const ResetPassword = ({history, match}) => {
    const {dispatch} = useGlobalState()

    const [userDetails, setUserDetails] = useState({
        password: '',
        password_confirm: ''
    })
    const [message,setMessage] = useState('')
    const [errorState, setErrorState] = useState(false)

    useEffect(() => {
        resetToken(match.params.token)
            .then(() => {
                console.log('token ok')
            })
            .catch((err) => {
                console.log('token invalid')
                setErrorState(true)
                setMessage('Token Invalid')
            })
    },[match.params.token])

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

        const valCred = validate({email: userDetails.email, password: userDetails.password},{
            email: {
                presence: true,
                email: true
            },
            password: {
                presence: true,
                length: {
                    minimum: 6,
                    message: 'must be more than 6 characters'
                }
            }
        })


        if(!valCred){
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
        else{
            setMessage((valCred.username && valCred.username[0]), ' ', (valCred.password && valCred.password[0]))
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
                    <p className='msgText'>{message}</p>
                    <input className="pass_reset_btn" type="submit"></input>
                </div>
                ):
            (<p>{message}</p>)}
            </form>
        </div>
    )
}

export default ResetPassword