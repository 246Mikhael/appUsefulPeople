import React from "react";


function InputData({
    value,
    changeHandler, 
    objKey, 
    placeholder, 
    propsAddMan
  }){
    return <input className="col-5 col-md-4 col-lg-4 col-sm-5 input-data-man"
                  value={value}
                  placeholder={placeholder}
                  onChange={event=>changeHandler(objKey,event)}
                  onKeyDown={(event) => {
                    if (event.code === "Enter" && 
                        propsAddMan.checkObj( propsAddMan.dataOfMan )) {
        
                           propsAddMan.sendHandler(propsAddMan.dataOfMan);
                           propsAddMan.hideInputs();
                           propsAddMan.showAddUsefulManButton();
                           propsAddMan.deleteValueOfObj()
                      }
        }}/>
  }

export default InputData;