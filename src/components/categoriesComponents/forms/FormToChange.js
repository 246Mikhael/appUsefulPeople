import  React, {useState} from "react";
import EditParamOfManInput from "./EditParamOfManInput";
import SaveChangeManParamsButton from "./SaveChangeManParamsButton";
//import { nanoid } from "@reduxjs/toolkit";



function FormToChange ({ item, setEditingManId, saveEditMan }) {

    let initObj = {
        id: item.id,
        category: item.category,
        surname: item.surname,
        name: item.name,
        profession: item.profession,
        job: item.job,
        phone: item.phone,
        networks: item.networks,
      }


     const [values, setValues] = useState(initObj);
    
  
      function changeHandler(prop, value){
        setValues({...values, ...{[prop]: value}})
      }

    return <div className="container">
        <div className="row justify-content-center mt-3"> 
      <div className="col-4 name-of-input-in-categ">Фамилия</div> 
      <EditParamOfManInput value={values.surname}
                         changeHandler={changeHandler}
                         objKey={'surname'}
                         tooltipText={'заполнение обязательно'}
                         />
     </div> 
     <div className="row justify-content-center mt-3">                  
         <div className="col-4 name-of-input-in-categ">Имя</div>                       
         <EditParamOfManInput value={values.name}
                         changeHandler={changeHandler}
                         objKey={'name'}/>
     </div>  
     <div className="row justify-content-center mt-3">                  
         <div className="col-4 name-of-input-in-categ">Сфера</div>                       
         <EditParamOfManInput value={values.profession} 
                         changeHandler={changeHandler}
                         objKey={'profession'}
                         tooltipText={'заполнение обязательно'}/>
     </div> 
     <div className="row justify-content-center mt-3">                   
         <div className="col-4 name-of-input-in-categ">Скилл</div>                       
         <EditParamOfManInput value={values.job} 
                         changeHandler={changeHandler}
                         objKey={'job'}/>
     </div>  
     <div className="row justify-content-center mt-3">               
         <div className="col-4 name-of-input-in-categ">Телефон</div>                       
         <EditParamOfManInput value={values.phone} 
                         changeHandler={changeHandler}
                         objKey={'phone'}
                         tooltipText={'заполните эту или телефон'}/>
     </div> 
     <div className="row justify-content-center mt-3">                   
         <div className="col-4 name-of-input-in-categ">Соцсети</div>                        
         <EditParamOfManInput value={values.networks}
                         changeHandler={changeHandler}
                         objKey={'networks'}
                         tooltipText={'заполните эту или телефон'}/>
    </div>
    <SaveChangeManParamsButton 
              setEditingManId={setEditingManId}
              saveEditMan={saveEditMan}
              item={values}
    /> 
   </div>
}

export default FormToChange;