import React from "react";

function EditCategoriesButton({toggleVisibleCategoriesPanel,
    hideAddUsefulManButton,
    item,
    setEditCateg
}){
    
    return <button onClick={()=>{toggleVisibleCategoriesPanel();
                                   hideAddUsefulManButton();
                                   setEditCateg(item)
                                }
                                         }>Смотреть</button>
}

export default EditCategoriesButton;