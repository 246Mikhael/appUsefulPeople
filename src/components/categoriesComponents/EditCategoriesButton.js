import React from "react";

function EditCategoriesButton({toggleVisibleCategoriesPanel,
    hideAddUsefulManButton,
    item,
    setEditCateg
}){
    
    return <button className="left-categ-button"
             onClick={()=>{toggleVisibleCategoriesPanel();
                                   hideAddUsefulManButton();
                                   setEditCateg(item)
                                   console.log(item)
                                }
                                         }>cмотреть</button>
}

export default EditCategoriesButton;