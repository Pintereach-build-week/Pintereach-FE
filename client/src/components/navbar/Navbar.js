import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <nav>
                <h1>Pintreach</h1>
                <Link to='/'>Home</Link>
                <br />
                <Link to='/saved-list'>Saved List</Link>
                <br />
                <Link to='/register'>Register</Link>
                <br />
                <Link to='/login'>Login In</Link>
                <br />
                <Link to='/logout' >Log Out</Link>
            </nav>
        </div>
    )
}
