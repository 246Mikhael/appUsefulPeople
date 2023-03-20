import React from "react";


function InputData({value,changeHandler, objKey}){
    return <input value={value} onChange={event=>changeHandler(objKey,event)}/>
}

export default InputData;