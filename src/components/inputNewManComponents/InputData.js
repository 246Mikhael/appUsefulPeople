import React from "react";


function InputData({value,changeHandler, objKey, placeholder}){
    return <input className="input-data-man"
     value={value}
     placeholder={placeholder}
     onChange={event=>changeHandler(objKey,event)}/>
}

export default InputData;