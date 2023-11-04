import React from "react";
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
  sendHandler,
  setEditCateg,
  editCateg
  }){
 
    let res;
  
    if (visibleCategoryPanel) {  
      res = Object.keys(people).map( function(key) {  

     
      if (people[key][0]) {

        return <div className="col-lg-4 col-md-6 col-sm-12 mb-4 text-center h2">
                    <Category 
                       item={key} 
                       removeCategory={removeCategory}
                       toggleVisibleCategoriesPanel={toggleVisibleCategoriesPanel}
                       hideAddUsefulManButton={hideAddUsefulManButton}
                       setEditCateg={setEditCateg}
                       editCateg={editCateg}
                       peopleInCateg={people[key]}
                       delMan={delMan}
                       setEditingManId={setEditingManId}
                       editingManId={editingManId}
                       saveEditMan={saveEditMan}
                       sendHandler={sendHandler}
                       />
                  </div>
      }else {
       return <></>
         }
       })
    }

  return <>
    <div className="container">
      <div className="row mt-5 justify-content-around">
         {res}
      </div>
    </div>
 </>
}

export default Categories;