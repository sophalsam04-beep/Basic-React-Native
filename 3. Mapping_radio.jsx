/// Mapping radio from array 

import { useState } from "react";

function MyForm(){
    const [size, setSize] = useState("medium");

    return (
        <form>
            {Option.map((opt)=> (
                <label key={opt}>
                    <input type="radio" name="size" value={opt} checked = {size === opt} onChange={(e)=> setSize(e.target.value)}/>{opt}
                </label>
            ))}
        </form>
    )
}