import React from "react";
import Table from "../tableComponent/Table";
import Category from "./Category";


function Categories({people, 
  removeCategory,
  visibleCategoryPanel,
  toggleVisibleCategoriesPanel,
  hideAddUsefulManButton,
  delMan,
  setEditingManId,
  editingManId,
  saveEditMan,
  addManInCategory,
  sendHandler,
  setEditCateg,
  editCateg
}){

    let res;
    let res1;
  
  if(visibleCategoryPanel){  //взависимости от флага показываем или список категорий
     res = Object.keys(people).map(function(key){  //таблицу с людьми конкретной категории 

      return <Category key={key} 
                       item={key} 
                       removeCategory={removeCategory}
                       toggleVisibleCategoriesPanel={toggleVisibleCategoriesPanel}
                       hideAddUsefulManButton={hideAddUsefulManButton}
                       setEditCateg={setEditCateg}/>
     })
    } else{
      res1 = <Table editCateg={editCateg}
                    setEditCateg={setEditCateg}
                    people={people}
                    delMan={delMan}
                    setEditingManId={setEditingManId}
                    editingManId={editingManId}
                    saveEditMan={saveEditMan}
                    toggleVisibleCategoriesPanel={toggleVisibleCategoriesPanel}
                    hideAddUsefulManButton={hideAddUsefulManButton}
                    addManInCategory={addManInCategory}
                    sendHandler={sendHandler}
                    
                    />
    }

     

 return <div>
   {res1}
   <ul className="categ-ul">
   {res}
 </ul>
 </div>
}

export default Categories;