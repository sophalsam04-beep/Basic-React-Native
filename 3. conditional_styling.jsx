function Button({ isActive}){
    return (
        <button className={isActive ? "active" : "inactive"}>Click me !</button>
    );
}