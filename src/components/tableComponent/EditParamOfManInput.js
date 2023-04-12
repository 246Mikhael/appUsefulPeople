import React from "react";

function EditParamOfManInput({value,changeHandler,objKey,placeholder}){

    return <input className="input-in-category"
                  value={value}
                  placeholder={placeholder}
                  onChange={event=>changeHandler(objKey,event)}/>
}

export default EditParamOfManInput;