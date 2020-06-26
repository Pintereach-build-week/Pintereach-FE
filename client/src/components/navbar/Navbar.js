import React from 'react'
import { Link } from 'react-router-dom'
import LinkStyle from './LinkStyle'
import { logout } from "../../store/auth/authActions"
import { connect } from "react-redux"

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

                <h1>Pintreach</h1>
                <Link to='/'>Home</Link>
                <Link to='/saved-list'>Saved List</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login In</Link>
                <Link to='/logout' onClick={() => logout()} >Log Out</Link>

            </nav>
        </div>
    )
}

const mapPropsToState = state => {
    return {
      isAuth: state.auth.isAuth,
    };
  };
  export default connect(
    mapPropsToState,
    { logout },
  )(Navbar);