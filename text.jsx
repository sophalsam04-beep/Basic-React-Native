import { useState } from "react";
import {ReactSVG} from 'react-svg';
import {viteLogo} from '@expo/vector-icons';
import '/Applications';

function App(){
    const [count, setCount] = useState(0);

    return (
        <>
        <div>
            <a href="https://vitejs.dev" target="_blank">
            <img src="reactLogo" className="Logo react" alt="React Logo"> </img>
            </a>
        </div>
        <div className="card">
            <button onClick={()=> setCount((count)=>count + 1)}></button>
            <p>Edit<code> src/app.jsx</code> and save the HMR template</p>
            
        </div>
        <p className="react-the-docs">Click the Vite and React logo to learn more </p>
        <div><p>Abbreviation of Studying IT Year 2</p></div>
        </>
    )
}

export default App