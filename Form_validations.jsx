// Basic Form validation in jsx
import { useState } from "react";

function RegisterForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    const handlesubmit = (e)=> {
        e.preventDefault();

        if(!email){
            setError("Passwors is required !");
            return;
        }

        if(password.length < 6){
            setError("If password must contain 6 characterist");
            return;
        }

        setError("");
        alert("Form submmited succesfully !");

    };

    return (
        <form onClick={handlesubmit}>
            <input 
            name="email"
            value={email}
            onChange={(e)=> setPassword(e.target.value)}

            placeholder="Email"
            />

            <input
            name="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}

            placeholder="password"
            />

{error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit">Register</button>
        </form>
    )
}
