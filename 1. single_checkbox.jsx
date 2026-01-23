import { useState } from "react";

function MyForm(){
    const [checked, setChecked] = useState(false);

    return (
        <form>
            <label>
                <input type="checkbox" checked = {checked} onChange={(e)=> setChecked(e.target.checked)}/>
                Acept Terms
                <input type="checkbox" checked = {checked} onChange={(e) => setChecked(e.target.checked)}/>
                Acept Term2
                <input type="checkbox" checked ={checked} onChange={(g)=> setChecked(g.target.checked)}/>Acept Term 3
            </label>
            <p> Checked: {checked ? "yes" : "No"}</p>
        </form>
    )
}