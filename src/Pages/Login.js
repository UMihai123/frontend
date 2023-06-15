import jwt_decode from "jwt-decode";
import "../login.css";
import {useNavigate} from "react-router-dom"
import React, { useState, useEffect } from "react"
import axios from "axios"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const nav = useNavigate()

    useEffect(() => {
        const userFromLocalStorage = localStorage.getItem("user")
        if (userFromLocalStorage){
            nav("/")
        }
    }, [nav]);

    function register() {
        nav("/register")
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const user = {email, password}
        setErrorMessage("")
        await axios.post("https://localhost:7002/api/Authenticate/login", user)
                .then((response) => {
                    localStorage.setItem("user", response.data.token)
                    nav("/")
                }).catch(() => {
                    setErrorMessage("The username or password is invalid!")
                });
    };

    return {
        <>  
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
                        <input onClick={handleSubmit} type="submit" className="btn btn-success" style={{width: "100px"}} value="Login"></input>
                    </div>
                </form>
            </div>
            <p className="text-center text-danger">{errorMessage}</p>

            <p className="text-center">Don't have an account? <button className="btn btn-link" onClick={register}>Register</button></p>
        </>
    );
}