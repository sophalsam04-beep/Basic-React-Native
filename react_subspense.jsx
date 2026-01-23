import { lazy, Suspense } from "react";

export default App;
const Dashboard = lazy(()=> import ("./react_subspense.jsx"));

function App(){
    return (
        <div>
            <h1>My App</h1>

            <Suspense fallback = {<p> Loading dashboard...</p>}>
            <Dashboard/>
            </Suspense>
        </div>
    );
}

