// child component
function User({name, age, role}){
    return (
        <div>
            <h2>Name : {name}</h2>
            <p>Age : {age}</p>
            <p>Role : {role}</p>
            <button onClick={()=> alert("Clicked")}>Click Now</button>
            <button onClick={()=> alert("Clicked")}>Click for the Buttons</button>
        </div>
    );
    
}
