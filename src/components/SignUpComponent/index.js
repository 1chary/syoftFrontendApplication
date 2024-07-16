import "./index.css" 
import {useState} from "react"
import {Link} from "react-router-dom"

const SignUpComponent = () => {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [pass,setPassword] = useState("")
    const [number,setNumber] = useState("")

    const submitTheDetails = async (event) => {
        event.preventDefault()
        /*static data said to include in the doc */
        const lastName = "ni";
        const userCity = "Hyderabad";
        const zipCode = "500072";
        const userDetails = {username,email,pass,number,lastName,userCity,zipCode}
        const options = {
            body: JSON.stringify(userDetails),
            method: 'POST',
        }
        const apiUrl = "https://syoft.dev/Api/user_registeration/api/user_registeration"
        const responseData = await fetch(apiUrl,options)
    }

    return (
        <div className="sign-up-page">
            <div className="image-container"></div>
            <div className = "details-container">
                <form className = "form-container" onSubmit={submitTheDetails}>
                    <h1 className = "register-heading">Register</h1>
                    <div className = "alignment-container">
                        <label className = "label-styling" htmlFor = "username" >Username</label>
                        <input type = "text" className = "input-field-box" id = "username" placeholder = "Enter your Name" onChange = {(event) => setUsername(event.target.value)}/>
                        <label className = "label-styling" htmlFor = "email">E mail</label>
                        <input type = "text" className = "input-field-box" id = "email" placeholder = "Enter your e mail address" onChange = {(event) => setEmail(event.target.value)}/>
                        <label className = "label-styling" htmlFor = "password">Password</label>
                        <input type = "password" className = "input-field-box" id = "password" placeholder = "Enter password" onChange = {(event) => setPassword(event.target.value)}/>
                        <label className = "label-styling" htmlFor = "number">Mobile Number</label>
                        <input type = "text" className = "input-field-box" id = "number" placeholder = "Enter your phone number" onChange = {(event) => setNumber(event.target.value)}/>
                        <button type = "submit" className="sign-in-button">Sign In</button>
                        <p className="have-an-account-para">Already have an account?<Link to = "/logIn" className="log-in-text"> Log In</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
    
}

export default SignUpComponent