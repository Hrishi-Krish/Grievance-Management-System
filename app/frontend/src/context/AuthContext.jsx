/* eslint-disable react/prop-types */
import {useState, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthProvider ({children}) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [jwt, setJwt] = useState(null);

    const login = async (username, password) => {
        try {
            const response = await axios.post("http://localhost:8080/api/auth/login", {username, password})
            if (response.status === 200) {
                setJwt(response.data.jwt);
                localStorage.setItem("jwt", response.data.jwt);
                setIsAuthenticated(true);

                const userResponse = await axios.get("http://localhost:8080/api/users/email/" + username, {
                    headers: {
                        Authorization: `Bearer ${response.data.jwt}`
                    }
                });
                if (userResponse.status === 200) {
                    setUser(userResponse.data);
                    localStorage.setItem("user", JSON.stringify(userResponse.data));
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    const logout = async () => {
        try {
            await axios.post("http://localhost:8080/api/auth/logout", {}, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
        } catch (error) {
            console.error(error)
        } finally {
            setIsAuthenticated(false);
            setJwt(null);
            setUser(null);
            localStorage.removeItem("jwt");
            localStorage.removeItem("user");
        }
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout, jwt, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };