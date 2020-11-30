import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <ul className="nav-links">
                <Link to="/sign_in">
                    Sign in
                </Link>
                <Link to="/register">
                    Register
                </Link>
                <Link to="/">
                    Dashboard
                </Link>
            </ul>
        </nav>
    )
}

export default Nav