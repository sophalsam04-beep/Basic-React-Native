import { useState } from "react";

function MyForm() {
    const {register, handleSubmit } = useState();

    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onsubmit)}>
            <label>
                <input type="checkbox" {...register("terms")}/> Acept Terms
            </label>
            <button type="submit">Submit</button>

        </form>
    )
}