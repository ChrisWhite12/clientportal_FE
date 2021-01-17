import React, {useState} from 'react'
import {useGlobalState} from "../config/store"
import {loginUser} from "../services/authServices"
import {Link} from 'react-router-dom'

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
            .then(() => {
                dispatch({
                    type: "setLoggedInUser",
                    data: userDetails.email
                })
                history.push('/dashboard')
            })
            .catch((err) => {
                setMessage('Invalid email or password')
            })
    }

    return (
        <div className="main_sec">
            <h1>Welcome to the Brain Train Client Portal</h1>
            <form className="login_card" onSubmit={handleSubmit}>
                <input className="login_fields" name="email" onChange={handleChange} type="text" placeholder="email"></input>
                <input className="login_fields" name="password" onChange={handleChange} type="password" placeholder="password"></input>
                <p>{message}</p>
                <div>
                    <input type="checkbox"></input>
                    <label> Remember Me</label>
                </div>
                <Link to="/forgot_password">
                    Forgot password
                </Link>
                <input id="login_btn" type="submit" value="Log In"></input>
                <input id="sign_up_btn" type="button" value="Sign Up"></input>
            </form>
        </div>
    )
}

export default Login