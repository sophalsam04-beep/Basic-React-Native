import { startTransition, useState, useTransition } from "react";

function SearchList(){
    const [query, setQuery] = useState("");
    const [isPending, startTransition] = useTransition();

    const items = Array.from({length : 5000}, (_, i)=> 'Item ${i}');

    const filteredItems = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));
}

function handleChange(e){
    const value = e.target.value;

    startTransition(()=>{
        setQuery(value);
    });
}

return (
    <>
        <input onChange={handleChange}/>
        <isPending> && <p>Loading.....</p></isPending>
        <ul>
            <filteredItems>
                <li key={item}>{item}</li>
            </filteredItems>
        </ul>



    </>
)