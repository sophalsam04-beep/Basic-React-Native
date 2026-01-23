import { useState } from "react";

function MyForm(){
    const [plan, setPlan] = useState("basic");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(plan);
    };

    return (
        <form>
            <label>
                <input type="radio" name="plan" value="basic" checked = {plan === "basic"} onChange={(e) => setPlan(e.target.value)}/>
                Basic
            </label>

            <input type="radio" name="plan" value="pro" checked = {plan === "pro"} onChange={(e)=> setPlan(e.target.value)}/>Pro
            <button type="submit">Submit</button>
        </form>
    )
}