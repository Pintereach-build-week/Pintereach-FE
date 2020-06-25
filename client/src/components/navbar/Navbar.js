import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <nav style={{display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>
                <h1>Pintreach</h1>
                <Link to='/'>Home</Link>
                <Link to='/saved-list'>Saved List</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login In</Link>
                <Link to='/logout' >Log Out</Link>
            </nav>
        </div>
    )
}
