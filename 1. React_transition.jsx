import { useState } from "react";
import { CSSTransition } from "react-transition-group";

function FadeExample(){
    const [show, setShow] = useState(false);

    return (
        <div>
            <button onClick={()=> setShow(!show)}>
                Toggle
            </button>
            <CSSTransition>
                in = {show}
                timeout = {300}
                className = "fade"
                unmountOnExit

                <div className="box">Hello Welcome to Class</div>
            </CSSTransition>
        </div>
    )
}

export default FadeExample;