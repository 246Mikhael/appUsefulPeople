import React from "react";

function EditParamOfManInput({value,changeHandler,objKey,placeholder}){

    return <input className="col-5 col-sm-4 col-md-4 col-lg-4 input-data-man"
                  value={value}
                  placeholder={placeholder}
                  onChange={event=>changeHandler(objKey,event)}/>
}

export default EditParamOfManInput;