import { useState } from "react";

function LoginForm(){
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");


    const handlesubmmit = (e)=> {
        e.preventDefault();
        console.log("Email : "+email);
        console.log("Password : "+password);
    };

    return (
        <form onSubmit={handlesubmmit}>
            <input type="emai"
            value={password}
            onChange={(e)=> setemail(e.target.value)}
            placeholder="Email"

            />

            <input type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder="Password"

            />

            <button type="submit">Login</button>
        </form>
    );

}

export default LoginForm;
