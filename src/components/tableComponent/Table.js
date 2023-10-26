import React, { useState} from "react";
import { nanoid } from "@reduxjs/toolkit";
import BackToMainButton from "./BackToMainButton";
import DeleteManButton from "./DeleteManButton";
import EditManButton from "./EditManButton";
import EditParamOfManInput from "./EditParamOfManInput";
import SaveChangeManParamsButton from "./SaveChangeManParamsButton";
import AddNewManInThisCategoryButton from "./AddNewManInThisCategoryButton";
import BackToCategoryButton from "./BackToCategoryButton";

function Table({editCateg,
                setEditCateg,
                people,
                delMan,
                setEditingManId,
                editingManId,
                saveEditMan,
                toggleVisibleCategoriesPanel,
                hideAddUsefulManButton,
                sendHandler
              }){
    
  const arr = people[editCateg];
  let initObj;
  let res1;
  let res2;
  let res3;
  let res4;

  /*  
  let styleOfButton = {
    visibility: 'hidden'
  }
    
  
    

  function setStyleOfButton(func, obj) {
    if ( !func(obj) ) {
       return {
          visibility: 'hidden'
       }
      }  else {
        return {
          visibility: 'visible'
        }
    }
  }
  */

  function checkInputs(obj){
      if((obj.phone ==="" && obj.networks === "") || 
       obj.surname === "" ||  obj.profession === ""){
        return true
       } else {
        return false;
      }
  }
/*
  function checkInputs1(obj){
      if((obj.phone !=="" && obj.networks !== "") || 
         obj.surname !== "" ||  obj.profession !== ""){
          return true
      } else {
          return false;
      }
  }
*/
  //------------------------------------
  if(editingManId === undefined){
     
    let  initObj1 = {
          id: nanoid(),
           category: editCateg,
           surname: "",
           name: "",
           profession: "",
           job: "",
           phone: "",
           networks:"",
         }

    res1 = <div className="container">
                   <div className="row justify-content-center mt-1">
                      <BackToMainButton 
                          toggleVisibleCategoriesPanel={toggleVisibleCategoriesPanel}
                          hideAddUsefulManButton={hideAddUsefulManButton}
                          setEditCateg={setEditCateg}/>   

                     <AddNewManInThisCategoryButton 
                          sendHandler={sendHandler}
                          dataOfMan={initObj1}
                          setEditingManId={setEditingManId}
                          id={initObj1.id}/>
                    </div>
                </div>
          
  }



  let rows;
   
  if(arr){
       res3 = <div className="container">
         <div className="row">
           <div className="col-3" id="categ-name">
             {editCateg.toLowerCase()}
           </div>
          </div>
         </div>
     rows = arr.map(function(item){

      if (editingManId !== item.id && editingManId === undefined){

            return  <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                     <div className="man-card" key={item.id}>
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
                          delMan={delMan}/>
                  
                   </div>           
                  </div>

      } if (editingManId !== item.id && editingManId !== undefined) {

        return <div></div>

      } else {
      
        initObj = {
          id: item.id,
          category: item.category,
          surname: item.surname,
          name: item.name,
          profession: item.profession,
          job: item.profession,
          phone: item.phone,
          networks: item.networks,
        }

        const [values, setValues] = useState(initObj);
      
        function changeHandler(prop, event){
           setValues({...values, ...{[prop]: event.target.value}})
         }




         if(checkInputs(values)){

            res1 = <div className="container">
            <div className="row justify-content-center mt-2"> 
              <BackToCategoryButton 
                setEditingManId={setEditingManId}
                toggleVisibleCategoriesPanel={toggleVisibleCategoriesPanel}
                hideAddUsefulManButton={hideAddUsefulManButton}
                id={item.id}
                idCss={"center-button"}
                categ={item.category}
                delMan={delMan}/>            
              </div>   
            </div> 

          } else{
           
         //styleOfButton = setStyleOfButton(checkInputs1, values);
         
          res1 = <div className="container">
              <div className="row justify-content-center mt-2">
                
                <SaveChangeManParamsButton 
                  setEditingManId={setEditingManId}
                  saveEditMan={saveEditMan}
                  item={values}
                  id={'left-button'}/>  

                <BackToCategoryButton 
                  setEditingManId={setEditingManId}
                  toggleVisibleCategoriesPanel={toggleVisibleCategoriesPanel}
                  hideAddUsefulManButton={hideAddUsefulManButton}
                  id={item.id}
                  idCss={'right-button'}
                  categ={item.category}
                  delMan={delMan}/> 
              </div>   
            </div>
     
     }
     res3 = <div className="container">
       <div className="row">
         <div className="col-3" id="categ-name">
          {editCateg.toLowerCase()}
         </div>
       </div>
     </div> 
      res4 = <div className="container">
      <div className="row justify-content-center mt-5">

        <div className="row justify-content-center mt-3"> 
          <div className="col-5 col-sm-4 col-md-4 col-lg-4 name-of-input-data">Фамилия</div> 
          <EditParamOfManInput value={values.surname}
                             changeHandler={changeHandler}
                             objKey={'surname'}
                             placeholder={'заполнение обязательно'}/>
         </div> 
         <div className="row justify-content-center mt-3">                  
             <div className="col-5 col-sm-4 col-md-4 col-lg-4 name-of-input-data">Имя</div>                       
             <EditParamOfManInput value={values.name}
                             changeHandler={changeHandler}
                             objKey={'name'}/>
         </div>  
         <div className="row justify-content-center mt-3">                  
             <div className="col-5 col-sm-4 col-md-4 col-lg-4 name-of-input-data">Профессия</div>                       
             <EditParamOfManInput value={values.profession} 
                             changeHandler={changeHandler}
                             objKey={'profession'}
                             placeholder={'заполнение обязательно'}/>
         </div> 
         <div className="row justify-content-center mt-3">                   
             <div className="col-5 col-sm-4 col-md-4 col-lg-4 name-of-input-data">Виды работ</div>                       
             <EditParamOfManInput value={values.job} 
                             changeHandler={changeHandler}
                             objKey={'job'}/>
         </div>  
         <div className="row justify-content-center mt-3">               
             <div className="col-5 col-sm-4 col-md-4 col-lg-4 name-of-input-data">Телефон</div>                       
             <EditParamOfManInput value={values.phone} 
                             changeHandler={changeHandler}
                             objKey={'phone'}
                             placeholder={'заполните эту или соцсети'}/>
         </div> 
         <div className="row justify-content-center mt-3">                   
             <div className="col-5 col-sm-4 col-md-4 col-lg-4 name-of-input-data">Соцсети</div>                        
             <EditParamOfManInput value={values.networks}
                             changeHandler={changeHandler}
                             objKey={'networks'}
                             placeholder={'заполните эту или телефон'}/>
        </div>
     </div>
    </div>
                          
      return <div></div>
   
   
    }
    
     
    })
  }
  
    return <div>
             {res3}
             {res1} 
             {res4}
             <div className="container">
              
                <div className="row mt-5">
                    {rows}
                </div>
             </div>
        
             {res2}
        </div>
}
export default Table;