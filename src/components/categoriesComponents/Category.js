import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import RemoveCategotyButton from "./RemoveCategoryButton";
import DeleteManButton from "./DeleteManButton";
import EditManButton from "./EditManButton";
import AddNewManInThisCategoryButton from "./AddNewManInThisCategoryButton";
import EditCategButton from "./EditCategButton";
import SaveChangesCategButton from "./SaveChangesCategButton";
import FormToChange from "./forms/FormToChange";
import FormToAddInCateg from "./forms/FormToAddInCateg";




function Category({item,
    removeCategory,
    peopleInCateg,
    delMan,
    setEditingManId,
    editingManId,
    saveEditMan,
    sendHandler,
  }){

     
    //---------------------------------------
      
    const [editMode, setEdit] = useState(false);
    function setEditMode(param) {
      setEdit(param);
    }

    const [inputs, setInputs] = useState(false);
    function showInputs(param) {
       setInputs(param)
    }


    let  initObj1 = {
      id: nanoid(),
       category: '',
       surname: "",
       name: "",
       profession: "",
       job: "",
       phone: "",
       networks:"",
     }

     const [newManValues, setNewManValues] = useState(initObj1);
     function addMan(prop, value){
      setNewManValues({...newManValues, ...{[prop]: value}})
     }

     function checkInputs(obj) {  
      if ((obj.phone ==="" && obj.networks === "") || 
          obj.surname === "" ||  obj.profession === "") {
              return false;
        } else {
          return true;
        }
     }

      
     let res;
     let res1;
     let res2;
 

     res = peopleInCateg.map(function(item) {

     
    
      if (editingManId === item.id && editMode) {

        res1 = <></>     
        res2 = <FormToChange 
                  item={item} 
                  setEditingManId={setEditingManId} 
                  saveEditMan={saveEditMan}
                  checkInputs={checkInputs}/>

        return <></>
     
      } if (editMode && !editingManId) {

        res1 = <>
           <RemoveCategotyButton 
                          removeCategory={removeCategory} 
                          item={item}
                          setEditMode={setEditMode}/>
           <SaveChangesCategButton setEditMode={setEditMode}/>               
                        
        </>

        return <div className="man-card">
                  <span className="h4 text-center"> {item.surname}</span>
                  <span className="h5 text-center">{item.name}</span>
                  <span className="h5 text-center">{item.profession}</span>
                  <span className="h5 text-center">{item.job}</span>
                  <span className="h6 text-center">{item.phone}</span>  
                  <span className="h6 text-center">{item.networks}</span>
                  <EditManButton 
                      id={item.id} 
                      setEditingManId={setEditingManId}/>
                  <DeleteManButton 
                      id={item.id} 
                      categ={item.category}
                      delMan={delMan}
                      setEditMode={setEditMode}/>
                </div>  
      }
  
      if (!editMode && !inputs) {
  
          res1 = <>
            <AddNewManInThisCategoryButton 
                      showInputs={showInputs}
                      item={item}
                      addMan={addMan}/>
            <EditCategButton setEditMode={setEditMode}
                           item={item}/>  
          </>

          return <div className="man-card">
                    <span className="h4 text-center"> {item.surname}</span>
                    <span className="h5 text-center">{item.name}</span>
                    <span className="h5 text-center">{item.profession}</span>
                    <span className="h5 text-center">{item.job}</span>
                    <span className="h6 text-center">{item.phone}</span>  
                    <span className="h6 text-center">{item.networks}</span>
                 </div>
      } 
      
      if (inputs) {
        
        res1 = <></>
      
        res2 =<FormToAddInCateg 
                  setEditingManId={setEditingManId} 
                  saveEditMan={saveEditMan} 
                  showInputs={showInputs} 
                  sendHandler={sendHandler}
                  newManValues={newManValues}
                  addMan={addMan} 
                  setNewManValues={setNewManValues}
                  checkInputs={checkInputs}/>

         return  <></>
      } else {
        return <></>
      }
})
    
    
    return <div className="categ-div">
            
              <span id="category">
                  {item}
              </span>
             <span>{res1}{res}{res2}</span> 
              
           </div>
        
}

export default Category;