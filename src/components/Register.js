import React, {Component} from 'react'

const Register = () => {
    return (
        <div className="main_sec">
            <h1>Welcome to the Brain Train Client Portal</h1>
            <div className="login_card">
                <input className="login_fields" type="text" placeholder="email"></input>
                <input className="login_fields" type="password" placeholder="password"></input>
                <input className="login_fields" type="password" placeholder="confirm password"></input>
                <div>
                    <input type="checkbox"></input>
                    <label>Agree to terms and conditions</label>
                </div>
                <input id="sign_up_btn" type="submit" value="Sign Up"></input>
            </div>
        </div>
    )
}

export default Register