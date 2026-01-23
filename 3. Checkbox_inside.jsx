import { useState } from "react";

function MyForm(){
    const [newsletter, setNewsletter] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({newsletter});
    };

    return (
        <form>
            <label>
                <input type="checkbox" checked = {newsletter} onChange={(e)=> setNewsletter(e.target.checked)}/> Subscribe the newLetters
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}