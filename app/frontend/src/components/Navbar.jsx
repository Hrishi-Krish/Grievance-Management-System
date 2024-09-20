import { Link, useLocation } from "react-router-dom";

const Navbar = ({isAuthenticated, handleLogout}) => {
    const location = useLocation();

    return (
        <header>
            {
                isAuthenticated ?
                    (<Link to='/' className="logo">Logo</Link>) :
                    (<Link to='/login' className="logo">Logo</Link>) 
            }
            <nav>
                {
                    isAuthenticated ? (
                        <Link to="/login" className="links" onClick={handleLogout}>Logout</Link>
                    ): (
                        location.pathname === "/login" ? (
                            <Link to="/register" className="links">Register</Link>
                        ) : (
                            <Link to="/login" className="links">Login</Link>
                        )
                    )
                }
               
            </nav>
        </header>
    );
};

export default Navbar;
