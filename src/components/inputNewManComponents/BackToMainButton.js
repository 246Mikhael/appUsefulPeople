import React from "react";

function BackToMainButton({
    hideAddUsefulManButton, 
    hideInputs,
    deleteValueOfObj}){
    return <button className="panel-button" id="right-button"
     onClick={()=>{
        hideAddUsefulManButton();
        hideInputs();
        deleteValueOfObj()
    }}>назад</button>
}

export default BackToMainButton;