import React from "react";


function SendDataButton({sendHandler,hideInputs,showAddUsefulManButton,dataOfMan,checkObj,deleteValueOfObj}){
    return <button onClick={()=>{
        if(checkObj(dataOfMan)){
        sendHandler(dataOfMan);
        hideInputs();
        showAddUsefulManButton();
        deleteValueOfObj()
    }
         }}>
            sendData
            </button>
}

export default SendDataButton;