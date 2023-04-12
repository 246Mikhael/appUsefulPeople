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

    
  let styleOfButton = {
    visibility: 'hidden'
  }
    
    

    function setStyleOfButton(func, obj){
      if(!func(obj)){
       return {
          visibility: 'hidden'
       }
      }  else {
        return {
          visibility: 'visible'
        }
    }
  }
  

    function checkInputs(obj){
      if((obj.phone ==="" && obj.networks === "") || 
       obj.surname === "" ||  obj.profession === ""){
        return true
       } else {
        return false;
       }
      }
      function checkInputs1(obj){
        if((obj.phone !=="" && obj.networks !== "") || 
         obj.surname !== "" ||  obj.profession !== ""){
          return true
         } else {
          return false;
         }
        }

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

        res1 = <div id="empty">
          <BackToMainButton 
             toggleVisibleCategoriesPanel={toggleVisibleCategoriesPanel}
             hideAddUsefulManButton={hideAddUsefulManButton}
             setEditCateg={setEditCateg}/>

             <div className="panel-button" id="central-empty-button">
              {editCateg.toLowerCase()}</div>

          <AddNewManInThisCategoryButton 
             sendHandler={sendHandler}
             dataOfMan={initObj1}
             setEditingManId={setEditingManId}
             id={initObj1.id}
           />
           </div>
        }



       let rows;
   
   if(arr){
       rows = arr.map(function(item){

        if(editingManId !== item.id && editingManId === undefined){

            return <tr key={item.id}>
        <td className="td-data" id="td-first">{item.surname}</td>
        <td className="td-data">{item.name}</td>
        <td className="td-data">{item.profession}</td>
        <td className="td-data">{item.job}</td>
        <td className="td-data">{item.phone}</td>  
        <td className="td-data" id="td-last">{item.networks}</td>
        <td className="td-button">
          <EditManButton 
            id={item.id} 
            setEditingManId={setEditingManId}/>
        </td> 
        <td className="td-button">
          <DeleteManButton 
            id={item.id} 
            categ={item.category}
            delMan={delMan}/>
        </td>
        
     </tr>
    }  if(editingManId !== item.id && editingManId !== undefined){

      return <tr key={item.id}>
  <td className="td-data" id="td-first">{item.surname}</td>
  <td className="td-data">{item.name}</td>
  <td className="td-data">{item.profession}</td>
  <td className="td-data">{item.job}</td>
  <td className="td-data">{item.phone}</td>  
  <td className="td-data" id="td-last">{item.networks}</td>
</tr>
}
    
    else {
      
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



      res2 = <div>
        <p>* обязательные к заполнению поля</p>
        <p>** заполните одно из этих полей</p>
      </div>

     if(checkInputs(values) && !arr[0].surname){
      res3 = <div id="empty" className="empty">
        
    
        <BackToCategoryButton 
         setEditingManId={setEditingManId}
         toggleVisibleCategoriesPanel={toggleVisibleCategoriesPanel}
         hideAddUsefulManButton={hideAddUsefulManButton}
         id={item.id}
         categ={item.category}
         delMan={delMan}/>
  
        <div className="panel-button" id="central-empty-button">{editCateg.toLowerCase()}</div>
        
        </div>
     } else{
      res3 = <div id="empty" className="empty">
        <div id="empty-left"></div>
        <div className="panel-button" id="central-empty-button">
              {editCateg.toLowerCase()}</div>
           
      </div>
      
      
      styleOfButton = setStyleOfButton(checkInputs1, values)
      
     
     }
      return <tr key={item.id}>
      <td className="td-input" id="first-td-input"><EditParamOfManInput value={values.surname}
                               changeHandler={changeHandler}
                               objKey={'surname'}
                               placeholder={'*'}/></td>
      <td className="td-input"><EditParamOfManInput value={values.name}
                               changeHandler={changeHandler}
                               objKey={'name'}/></td>
      <td className="td-input"><EditParamOfManInput value={values.profession} 
                               changeHandler={changeHandler}
                               objKey={'profession'}
                               placeholder={'*'}/></td>
      <td className="td-input"><EditParamOfManInput value={values.job} 
                               changeHandler={changeHandler}
                               objKey={'job'}/></td>
      <td className="td-input"><EditParamOfManInput value={values.phone} 
                               changeHandler={changeHandler}
                               objKey={'phone'}
                               placeholder={'**'}/></td>  
      <td className="td-input" id="last-td-input"><EditParamOfManInput value={values.networks}
                               changeHandler={changeHandler}
                               objKey={'networks'}
                               placeholder={'**'}/></td> 
      <td className="td-button" style={styleOfButton}><SaveChangeManParamsButton 
                               setEditingManId={setEditingManId}
                               saveEditMan={saveEditMan}
                               item={values}/></td>                         
   </tr>
   
    }
    
     
    })
  }
  
    return <div>
    
     {res1}{res3}
              
             <table className="table">
                <thead>
                    <tr>
                        <th className="th-first">фамилия</th>
                        <th>имя</th>
                        <th>профессия</th>
                        <th>виды работ</th>
                        <th>номер телефона</th>
                        <th className="th-last">соцсети</th>
                    </tr>
                </thead>
                <tbody>
                  {rows}
                </tbody>
             </table>
             
             {res2}
        </div>
}

export default Table;