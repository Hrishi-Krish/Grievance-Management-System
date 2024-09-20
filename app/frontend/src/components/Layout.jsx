import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import { useAuth } from "../hooks/useAuth"

const Layout = () => {

    const { isAuthenticated, logout} = useAuth();

    return (
        <>
            <Navbar isAuthenticated = {isAuthenticated} handleLogout={logout}/>
            {/* <Navbar /> */}
            <Outlet />
        </>

    )
}

export default Layout