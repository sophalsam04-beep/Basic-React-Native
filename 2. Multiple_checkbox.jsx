import { useState } from "react";

function MyForm(){
    const [selected, setselected] = useState([]);

    const handleChange = (e)=> {
        const value = e.target.value;

        setselected((prev) => prev.includes(value) ? prev.filter((v)=> v!==value) : [...prev, value]);
    };


    return (
        <form>
            <label>
                <input type="checkbox" value="apple" checked = {selected.includes("apple")} onChange={ handleChange}/>Apple
            </label>
            <label>
                <input type="checkbox" value="banana" checked = {selected.includes("banana")}/>Banana
            </label>

            <prev>{JSON.stringify(selected, null, 2)}</prev>
        </form>
    );
    

}



// step 1
// const value  = (e) => {
    // const value = e.tartget.value;
// }

/*  step 2
    selectmac((prev) => prev.include(value) ? prev.filter(v)=> v !== value) : [...prev, value]



*/