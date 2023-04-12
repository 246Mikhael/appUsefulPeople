import React from "react";

function BackToCategoryButton({setEditingManId,
    toggleVisibleCategoriesPanel,
    hideAddUsefulManButton,
    id,
    categ,
    delMan}){

    return <button id="empty-left"
     onClick={()=>{
        delMan({id,categ});
       // toggleVisibleCategoriesPanel();
       // hideAddUsefulManButton();
        setEditingManId(undefined)
        }}>назад</button>
}

export default BackToCategoryButton;