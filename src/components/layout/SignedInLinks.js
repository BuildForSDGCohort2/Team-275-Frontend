import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/cart' className="links">My Cart</NavLink></li>
            <li>    
                <NavLink to='/profile' className='btn btn-floating pink lighten-1'>CH</NavLink>
            </li>
        </ul>
    )
}

export default SignedInLinks