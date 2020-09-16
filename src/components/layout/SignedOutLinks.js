import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className="right hide-on-med-and-down">
            <li><NavLink to='/appointment' className="links">Book An Appointment</NavLink></li>
            <li><NavLink to='/news' className="links">Blog</NavLink></li>
            <li><NavLink to='/providerSignin' className="links">Provider SignIn</NavLink></li>
            <li><NavLink to='/signup' className="links">Sign In or Create Account</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks