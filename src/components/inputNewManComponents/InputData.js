import React from "react";


function InputData({value,changeHandler, objKey, placeholder}){
    return <input className="inpiut-data-man"
     value={value}
     placeholder={placeholder}
     onChange={event=>changeHandler(objKey,event)}/>
}

export default InputData;