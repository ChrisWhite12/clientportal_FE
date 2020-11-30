import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <ul className="nav-links">
                <Link to="/sign_in">
                    <li>Sign In</li>
                </Link>
                <Link to="/register">
                    <li>Register</li>
                </Link>
                <Link to="/">
                    <li>Dashboard</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav