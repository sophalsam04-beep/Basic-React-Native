import { useState } from "react";

function MyForm(){
    const {register, handleSubmit} = useState();


    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onsubmit)}>
            <label>
                <input type="radio" value="yes" {...register("Confirm")}/>Yes
                <input type="radio" value="no" {...register("Confirm")}/>No
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}


// output : Yes