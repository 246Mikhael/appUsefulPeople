import React, { useState} from "react";
import { nanoid } from "@reduxjs/toolkit";
import BackToMainButton from "./BackToMainButton";
import DeleteManButton from "./DeleteManButton";
import EditManButton from "./EditManButton";
import EditParamOfManInput from "./EditParamOfManInput";
import SaveChangeManParamsButton from "./SaveChangeManParamsButton";
import AddNewManInThisCategoryButton from "./AddNewManInThisCategoryButton";

function Table({editCateg,
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



      res1 = <div> <BackToMainButton 
       toggleVisibleCategoriesPanel={toggleVisibleCategoriesPanel}
       hideAddUsefulManButton={hideAddUsefulManButton}/>
       <AddNewManInThisCategoryButton 
       sendHandler={sendHandler}
       dataOfMan={initObj1}
       setEditingManId={setEditingManId}
       id={initObj1.id}
       />
       </div>
    }

    

   const rows = arr.map(function(item){

    if(editingManId !== item.id){

      return <tr key={item.id}>
        <td>{item.surname}</td>
        <td>{item.name}</td>
        <td>{item.profession}</td>
        <td>{item.job}</td>
        <td>{item.phone}</td>  
        <td>{item.networks}</td> 
        <td><DeleteManButton id={item.id} categ={item.category} delMan={delMan}/></td>
        <td><EditManButton id={item.id} setEditingManId={setEditingManId}/></td>
     </tr>
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

      

      return <tr key={item.id}>
      <td><EditParamOfManInput value={values.surname}
                               changeHandler={changeHandler}
                               objKey={'surname'}/></td>
      <td><EditParamOfManInput value={values.name}
                               changeHandler={changeHandler}
                               objKey={'name'}/></td>
      <td><EditParamOfManInput value={values.profession} 
                               changeHandler={changeHandler}
                               objKey={'profession'}/></td>
      <td><EditParamOfManInput value={values.job} 
                               changeHandler={changeHandler}
                               objKey={'job'}/></td>
      <td><EditParamOfManInput value={values.phone} 
                               changeHandler={changeHandler}
                               objKey={'phone'}/></td>  
      <td><EditParamOfManInput value={values.networks}
                               changeHandler={changeHandler}
                               objKey={'networks'}/></td> 
      <td><SaveChangeManParamsButton setEditingManId={setEditingManId}
                                      saveEditMan={saveEditMan}
                                      item={values}/></td>                         
   </tr>
    }
    
     
    })
  
    return <div>
             <table>
                <thead>
                    <tr>
                        <td>фамилия</td>
                        <td>имя</td>
                        <td>профессия</td>
                        <td>виды работ</td>
                        <td>номер телефона</td>
                        <td>соцсети</td>
                    </tr>
                </thead>
                <tbody>
                  {rows}
                </tbody>
             </table>
             {res1}
        </div>
}

export default Table;