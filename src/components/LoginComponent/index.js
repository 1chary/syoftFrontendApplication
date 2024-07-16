import { useState } from "react"
import "./index.css"

const LoginComponent = () => {
    const [username,setLogInUsername] = useState("")
    const [password, setLogInPassword] = useState("")
    return (
    <div className="sign-up-page">
        <div className="image-container-for-login"></div>
        <div className = "details-container">
                <form className = "form-container">
                    <h1 className = "register-heading">Log In</h1>
                    <div className = "alignment-container">
                        <label className = "label-styling" htmlFor = "username" >Username</label>
                        <input type = "text" className = "input-field-box" id = "username" placeholder = "Enter your Name" onChange = {(event) => setLogInUsername(event.target.value)}/>
                        <label className = "label-styling" htmlFor = "password">Password</label>
                        <input type = "password" className = "input-field-box" id = "password" placeholder = "Enter your password" onChange = {(event) => setLogInPassword(event.target.value)}/>
                        <button type = "submit" className="log-in-button">Log In</button>
                    </div>
                </form>
            </div>
    </div>
    )
}

export default LoginComponent