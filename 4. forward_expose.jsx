import { forwardRef , useImperativeHandle, useRef, useState } from "react";

const internalRef = useRef();

useImperativeHandle(ref, () =>({
    focus: () => internalRef.current.focus(),
    clear : () => {
        internalRef.current.value = "";
    }
}));

return <input ref={internalRef}/>;

export default Input;