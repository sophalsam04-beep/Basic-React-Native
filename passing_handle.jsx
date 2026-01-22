import { useTransition } from "react";

// passing handle submit in jsx
const handlesubmit = (e, userType) => {
    e.preventDefault();
    console.log(userType);

};

<form onClick={(e)=> handlesubmit(e, "Admin")}/>
