import React, {useState} from "react";
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
  sendHandler
}){
  

const[editCateg, setEditCategory] = useState('');

function setEditCateg(value){
  setEditCategory(value);
}

    let res;
  
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
      res = <Table editCateg={editCateg}
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
 <h3>Список полезных людей</h3>
   <ul>
   {res}
 </ul>
 </div>
}

export default Categories;