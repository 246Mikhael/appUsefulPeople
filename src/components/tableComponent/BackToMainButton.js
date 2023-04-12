import React from "react";

function BackToMainButton({
    toggleVisibleCategoriesPanel, 
    hideAddUsefulManButton,
    setEditCateg}){
    return <button className="panel-button" id="left-button"
                 onClick={()=>{toggleVisibleCategoriesPanel();
                               hideAddUsefulManButton();
                               setEditCateg(undefined)
                            }}>назад</button>
}

export default BackToMainButton;