function contactForm(){
    const handleSubmit = (e)=> {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;


        console.log(name, email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="email"/>
            <input name="password"/>
            <button type="submit">Send</button>
            
        </form>
    )
}
