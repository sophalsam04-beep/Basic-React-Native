import { useState } from "react";

function MyForm(){
    const [gender, setGender] = useState("");

    return (
        <form>
            <label>
                <input type="radio" name="gender" value="female" checked = {gender === "female"} onChange={(e)=> setGender(e.target.value)}/>
            </label> 
            <p>Selected  : {gender} </p>
        </form>
    )
}