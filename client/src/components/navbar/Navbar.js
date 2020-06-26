import React from 'react'
import { Link } from 'react-router-dom'
//import LinkStyle from './LinkStyle'

export const Navbar = () => {
    return (
        <div>
            <nav style={{display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>
                <h1 style={{color: '#FF5733'}}>Pintreach</h1>
                <Link style={{textDecoration:'none', color:'black'}} to='/'>Home</Link>

                <Link style={{textDecoration:'none', color:'black'}} to='/saved-list'>Saved List</Link>
                <Link style={{textDecoration:'none', color:'black'}} to='/register'>Register</Link>
                <Link style={{textDecoration:'none', color:'black'}}  to='/login'>Login In</Link>
                <Link style={{textDecoration:'none', color:'black'}} to='/logout' >Log Out</Link>
            </nav>
        </div>
    )
}
