const withAuth = (WrappedComponent) => {
    return function AuthComponent(pros) {

        if(!idLoggedIn){
            return <h2>Please log in Now </h2>
        }
        return <WrappedComponent {...pros}/>
    };
};

function Dashboard(){
    return <h1>Dashboard</h1>
}