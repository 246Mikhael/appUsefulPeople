import React from "react";

function EditParamOfManInput({value,changeHandler,objKey}){

    return <input value={value} 
                  onChange={event=>changeHandler(objKey,event)}/>
}

export default EditParamOfManInput;