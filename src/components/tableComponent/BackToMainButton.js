import React from "react";

function BackToMainButton({toggleVisibleCategoriesPanel, hideAddUsefulManButton}){
    return <button onClick={()=>{toggleVisibleCategoriesPanel();
        hideAddUsefulManButton()}}>назад</button>
}

export default BackToMainButton;