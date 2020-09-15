import React from 'react'
import { Link, NavLink} from 'react-router-dom'
import SignedOutLinks from './SignedOutLinks'

const NavBar = () => {
    return (
        <div className="navbar">
            <nav className="nav-wrapper white sticky-top">
                <div>
                    <a href="/" data-target="slide-out" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    <Link to='/' className="brand-logo black-text ">Online Health Therapy</Link>
                    <SignedOutLinks />
                </div>
            </nav>
            <ul id="slide-out" className="sidenav">
                <li><NavLink to='/appointment' className="links">Book An Appointment</NavLink></li>
                <li><NavLink to='/news' className="links">Blog</NavLink></li>
                <li><NavLink to='/provider' className="links">Provider SignIn</NavLink></li>
                <li><NavLink to='/signup' className="links">Sign In or Create Account</NavLink></li>
            </ul>
        </div>
        
    )
}

export default NavBar