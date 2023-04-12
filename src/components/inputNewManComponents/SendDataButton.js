import React from "react";


function SendDataButton({sendHandler,hideInputs,showAddUsefulManButton,dataOfMan,checkObj,deleteValueOfObj}){
    return <button className="panel-button" id="left-button"
    onClick={()=>{
        if(checkObj(dataOfMan)){
        sendHandler(dataOfMan);
        hideInputs();
        showAddUsefulManButton();
        deleteValueOfObj()
    }
         }}>
            Добавить
            </button>
}

export default SendDataButton;