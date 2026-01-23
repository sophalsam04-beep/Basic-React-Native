import { Route, Route } from "react-router-dom";
import Home from "./App";
import About from "./main";
import Contact from "./main";

function App(){
    return (
        <Route>
        <Route path="/" element = {<Home/>}/>
        <Route path="/basic" element = {<About/>}/>
        <Route path="./main.jsx" element = {<Contact/>}/>
        </Route>
    );
}
export default App;