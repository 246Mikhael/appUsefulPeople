import React from "react";
import Table from "../tableComponent/Table";
import Category from "./Category";



function Categories({
  people, 
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
  
  if (visibleCategoryPanel) {  
     res = Object.keys(people).map( function(key) {  

      return <div className="col-lg-4 col-md-6 col-sm-10 mb-4 text-center h2">
                    <Category 
                       item={key} 
                       removeCategory={removeCategory}
                       toggleVisibleCategoriesPanel={toggleVisibleCategoriesPanel}
                       hideAddUsefulManButton={hideAddUsefulManButton}
                       setEditCateg={setEditCateg}/>
                  </div>
       })
    } else{
      res1 = <Table 
                    editCateg={editCateg}
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

     

  return <>
    {res1}
    <div className="container">
      <div className="row mt-5 justify-content-around">
         {res}
      </div>
    </div>
 </>
}

export default Categories;