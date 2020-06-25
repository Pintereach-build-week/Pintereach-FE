import React, { useContext } from "react"
import { Redirect } from "react-router-dom"
import { logout } from "../../actions"
import { DispatchContext } from "../../context/index"


const Logout = () => {
    const dispatch = useContext(DispatchContext)
        localStorage.removeItem("token")
        localStorage.removeItem("user_id")
        localStorage.removeItem("username")
    logout(dispatch)
    return <Redirect to="/" />;

}

export default Logout