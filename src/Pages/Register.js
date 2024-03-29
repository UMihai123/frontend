import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../register.css"; 

export default function Register() {
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const nav = useNavigate()

    useEffect(() => {
        const userFromLocalStorage = localStorage.getItem("user")
        if (userFromLocalStorage){
            nav("/")
        }
    }, [nav]);

    const handleSubmit = async e => {
        e.preventDefault()

        const user = {email, userName, password}
        setErrorMessage("")
        if (email === "" || email.indexOf("@") === -1){
            setErrorMessage("The email you entered is invalid")
            return;
        }
        if (userName === ""){
            setErrorMessage("The username you entered is invaid")
            return;
        }
        if (password.length < 8){
            setErrorMessage("The password should be at least 8 charactes long")
            return;
        }
        console.log(e)
        const uppercaseCheck = /[A-Z]/.test(password);

        // Password number check
        const numberCheck = /[0-9]/.test(password);

        // Password special character check
        const specialCharacterCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (!uppercaseCheck || !numberCheck || !specialCharacterCheck){
            setErrorMessage("The password should have one:\n-uppercase letter\n-number\n-special character")
            return
        }

        await axios.post("https://localhost:7002/api/Authenticate/register", user)
                .then(() => {
                    nav("/login")
                }).catch(() => {
                    setErrorMessage("There was an error creating your account.")
                });
    };


  return (
    <>
      <div className="container1">
        <form className="form-container1" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              value={email}
              className="form-control"
              name="email"
              onChange={({ target }) => setEmail(target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              value={userName}
              className="form-control"
              name="username"
              onChange={({ target }) => setUserName(target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              value={password}
              className="form-control"
              name="password"
              onChange={({ target }) => setPassword(target.value)}
            ></input>
          </div>
          <div className="d-flex justify-content-center">
            <input
              onClick={handleSubmit}
              type="submit"
              className="btn btn-success btn-register"
              value="Register"
            ></input>
          </div>
        </form>
      </div>
      <p className="text-center text-danger error-message">{errorMessage}</p>
    </>
  );
}
