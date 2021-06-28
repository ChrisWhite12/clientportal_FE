import React, {useState} from 'react'
import {Link} from 'react-router-dom'

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
                    role: resData.user.role,
                    pracId: resData.user.pracId
                })
                history.push('/dashboard')
            })
            .catch((err) => {
                setMessage('Invalid email or password')
            })
    }

    const handleRegister = () => {
        history.push('/register')
    }

    return (
        <div className="main_sec">
            <h1 className="mainheader">Welcome to the Brain Train Client Portal</h1>
            <form className="login_card" onSubmit={handleSubmit}>
                <input className="login_fields" name="email" onChange={handleChange} type="text" placeholder="email"></input>
                <input className="login_fields" name="password" onChange={handleChange} type="password" placeholder="password"></input>
                <p className='msgText'>{message}</p>

                <Link to="/forgot_password">
                    Forgot password
                </Link>

                <input className="login_btn" type="submit" value="Log In"></input>
                <input className="sign_up_btn" type="button" value="Register" onClick={handleRegister}></input>
            </form>
        </div>
    )
}

export default Login