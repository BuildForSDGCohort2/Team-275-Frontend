import React from 'react'
import { NavLink} from 'react-router-dom'

const NavBarTop = () => {
    return (
        <div className="navbar">
            <nav className="nav-wrapper white">
                <ul className="left">
                    <li><NavLink to='/cart' className="links">My Cart</NavLink></li>
                </ul>
                <ul className="right">
                    <li><NavLink to='/cart' className="links">My Cart</NavLink></li>
                    <li><NavLink to='/profile' className='btn btn-floating pink lighten-1'>CH</NavLink></li>
                </ul>
            </nav>
        </div>
        
    )
}

export default NavBarTop