import React, {Component} from 'react'

const Login = () => {
    return (
        <div className="main_sec">
            <h1>Welcome to the Brain Train Client Portal</h1>
            <div className="login_card">
                <input className="login_fields" type="text" placeholder="email"></input>
                <input className="login_fields" type="password" placeholder="password"></input>
                <div>
                    <input type="checkbox"></input>
                    <label> Remember Me</label>
                </div>
                <a>Forgot Password</a>
                <input id="login_btn" type="submit" value="Log In"></input>
                <input id="sign_up_btn" type="button" value="Sign Up"></input>
            </div>
        </div>
    )
}

export default Login