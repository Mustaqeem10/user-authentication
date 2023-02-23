import { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Registration() {

    const [userData, setUserData] = useState(
        {
            username: "",
            email: "",
            password:""
        }
    )

    function handleChange(event){
        const {name, value} = event.target
        setUserData((prevuserData) => {
            return(
                {
                    ...prevuserData,
                    [name]: value
                }
            )
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(userData)
    }

    return (
        <div className="registration">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                id="username" 
                placeholder="Username" 
                name='username' 
                value={userData.username} 
                onChange={handleChange} required
            />
            <input 
                type="text" 
                id="email" 
                placeholder="Email" 
                name='email' 
                value={userData.email} 
                onChange={handleChange} required
            />
            <input 
                type="password" 
                id="password" 
                placeholder="Password" 
                name='password' 
                value={userData.password} 
                onChange={handleChange} required
            />
            <button>Sign Up</button>
            <p>Already have an account? <Link to="/login">Login</Link></p> 
        </form>
        <svg id="wave1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <svg id="wave2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fillOpacity="1" d="M0,288L80,282.7C160,277,320,267,480,229.3C640,192,800,128,960,138.7C1120,149,1280,235,1360,277.3L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        <script src="./main.js"></script>
        </div>
    )
}

export default Registration