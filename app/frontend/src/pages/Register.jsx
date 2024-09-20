import { useState } from "react";

export default function Register() {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    return (
        <main>
            <div className="form-ui">
                <form action="" onSubmit={handleSubmit}>
                    <div className="form-body">
                        <div className="welcome-lines">
                            <div className="welcome-line-1">Grievance Management System</div>
                            <div className="welcome-line-2">Register</div>
                        </div>
                        <div className="input-area">
                            <div className="form-inp">
                                <label htmlFor="email">Email address</label>
                                <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="form-inp">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} />
                            </div>
                            <div className="form-inp">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="submit-button-cvr">
                            <button className="submit-button" type="submit">Register</button>
                        </div>
                    </div>
                </form>
            </div>

        </main>

    )
}