import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/basic");
    };

    return <button onClick={handleLogin}>Login</button>;
}