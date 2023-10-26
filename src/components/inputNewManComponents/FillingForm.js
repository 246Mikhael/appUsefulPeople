import React, { useState } from "react";
import SendDataButton from "./SendDataButton";
import InputData from "./InputData";
import { nanoid } from "@reduxjs/toolkit";
import BackToMainButton from "./BackToMainButton";


const initObj = {
  id:"",
  category:"",
  surname:"",
  name:"",
  profession:"",
  job:"",
  phone:"",
  networks:"",
}




function FillingForm({
  visibleInputs,
  sendHandler,
   hideInputs,
   showAddUsefulManButton,
   hideAddUsefulManButton,
  }){

 function id(){
  return nanoid();
 }


  const [obj, setObj] = useState(initObj);

  function changeHandler(prop, event){
   
    setObj({...obj, ...{[prop]: event.target.value},id: id()})
  }

  //const [isVisible, setVisiblity] = useState(false);



  function checkObj(obj){  //проверка на заполнение инпутов
         if((obj.phone ==="" && obj.networks === "") || 
         obj.category === "" || obj.surname === "" || 
              obj.profession === ""){
            return false;
      } else {
        return obj;
      }
  }

  function deleteValueOfObj(){
    setObj(initObj);
  }
  let showFillingForm;

  if(visibleInputs !== false){ 
    
    let propsAddMan = {
      sendHandler: sendHandler,
      hideInputs: hideInputs,
      showAddUsefulManButton: showAddUsefulManButton,
      dataOfMan: obj,
      checkObj: checkObj,
      deleteValueOfObj: deleteValueOfObj
    }

    let buttonsPanel; 

    if (checkObj(obj)) {
      buttonsPanel = <div className="row justify-content-center mt-5">
           <SendDataButton propsAddMan={propsAddMan}/>
           <BackToMainButton hideAddUsefulManButton={hideAddUsefulManButton}
                hideInputs={hideInputs}
                deleteValueOfObj={deleteValueOfObj}
                id={'right-button'}/>
  
    </div>
    } else {
      buttonsPanel = <div className="row justify-content-center mt-5">
      <BackToMainButton hideAddUsefulManButton={hideAddUsefulManButton}
           hideInputs={hideInputs}
           deleteValueOfObj={deleteValueOfObj}
           id={'center-button'}/>

     </div>
    }

    
    
    showFillingForm = <div className="container man-form">
    
    {buttonsPanel}
   
      
   <div className="row justify-content-center mt-5 input-name-wrap">
    <div className="col-5 col-md-4 col-lg-4 col-sm-5 name-of-input-data">Категория</div> 
     <InputData 
       value={obj.category}
       objKey={'category'}
       changeHandler={changeHandler}
       propsAddMan={propsAddMan}
       placeholder={'заполнение обязательно'}/>
   </div> 
   <div className="row justify-content-center mt-3 input-name-wrap">
     <div className="col-5 col-md-4 col-lg-4 col-sm-5 name-of-input-data input-name-wrap">Фамилия</div>
     <InputData 
       value={obj.surname} 
       objKey={'surname'}
       changeHandler={changeHandler}
       propsAddMan={propsAddMan}
       placeholder={'заполнение обязательно'}/>
    </div>
    <div className="row justify-content-center mt-3 input-name-wrap">
      <div className="col-5 col-md-4 col-lg-4 col-sm-5 name-of-input-data">Имя</div>
      <InputData
         value={obj.name} 
         objKey={'name'}
         changeHandler={changeHandler}
         propsAddMan={propsAddMan}/>
   </div>
   <div className="row justify-content-center mt-3 input-name-wrap">
     <div className="col-5 col-md-4 col-lg-4 col-sm-5 name-of-input-data">Профессия</div>
     <InputData 
       value={obj.profession} 
       objKey={'profession'}
       changeHandler={changeHandler}
       placeholder={'заполнение обязательно'}
       propsAddMan={propsAddMan}/>
   </div>
   <div className="row justify-content-center mt-3 input-name-wrap">
     <div className="col-5 col-md-4 col-lg-4 col-sm-5 name-of-input-data">Виды работ</div> 
     <InputData  
       value={obj.job}
       objKey={'job'}
       changeHandler={changeHandler}
       propsAddMan={propsAddMan}/>
   </div>
   <div className="row justify-content-center mt-3 input-name-wrap">
     <div className="col-5 col-md-4 col-lg-4 col-sm-55 name-of-input-data">Телефон</div> 
     <InputData 
       value={obj.phone} 
       objKey={'phone'}
       changeHandler={changeHandler}
       placeholder={'заполните одно из полей'}
       propsAddMan={propsAddMan}/>
   </div>
   <div className="row justify-content-center mt-3 input-name-wrap">
      <div className="col-5 col-md-4 col-lg-4 col-sm-5 name-of-input-data">Соцсети</div>
      <InputData 
        value={obj.networks}
        objKey={'networks'}
        changeHandler={changeHandler}
        placeholder={'заполните одно из полей'}
        propsAddMan={propsAddMan}/>
    </div>
                          
  </div>
  }

    return <div>
   {showFillingForm}
  </div>
}


export default FillingForm;


