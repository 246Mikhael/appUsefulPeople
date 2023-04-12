import React from "react";
import RemoveCategotyButton from "./RemoveCategoryButton";
import EditCategoriesButton from "./EditCategoriesButton";
//в компонент входит название, кнопки для редактирования и удаления.

function Category({item,
    removeCategory,
    toggleVisibleCategoriesPanel,
    hideAddUsefulManButton,
    setEditCateg}){
   

    return <>
    <li className="categ-li">
       <span className="categ-list">{item}</span> 
       <span className="categ-buttons">
        <EditCategoriesButton
            toggleVisibleCategoriesPanel={toggleVisibleCategoriesPanel}
            hideAddUsefulManButton={hideAddUsefulManButton}
            setEditCateg={setEditCateg}
            item={item}/>
        <RemoveCategotyButton removeCategory={removeCategory} item={item}/>
        </span>
        </li>
        
        </>
}

export default Category;