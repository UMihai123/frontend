import React, { useState } from "react"
import axios from "axios"
import jwt_decode from "jwt-decode";
import "../login.css";

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = async e => {
        e.preventDefault()
        // conexiunea cu back-end
        const user = {email, password}
        setErrorMessage("")
        await axios.post("https://localhost:7002/api/Authenticate/login", user)
                .then((response) => {
                    console.log(response)
                    console.log(jwt_decode(response.data.token))
                }).catch(() => {
                    setErrorMessage("The username or password is invalid!")
                });
    };

    return (
        <>  
        {/* formularul de login ce contine email si parola */}
        <div class= "login-form">
            <div className="container w-25 d-flex align-items-center justifiy-content-center" style={{marginTop: "200px" }}> 
                <form className="my-auto" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" value={email} className="form-control" name="email" onChange={({ target }) => setEmail(target.value)}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input type="password" value={password} className="form-control" name="password" onChange={({ target }) => setPassword(target.value)}></input>
                    </div>
                    <div className="d-flex justify-content-center">
                    </div>
                </form>
            </div>
        </div>
            <p className="text-center text-danger">{errorMessage}</p>
        </>
    );
}