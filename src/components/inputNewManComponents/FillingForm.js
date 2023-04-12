import React, { useState } from "react";
import SendDataButton from "./SendDataButton";
import InputData from "./InputData";
import { nanoid } from "@reduxjs/toolkit";
import BackToMainButton from "./BackToMainButton";
//import ShowCategoriesList from "../../container/ShowCategoriesList";

//инпуты для имиени , фамилии итд человека. Формируем объект из value инпутов 
//через useState. по клику кнопки, отправляем объект с стор

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

  function checkObj(obj){  //проверка на заполнение инпутов
         if((obj.phone ==="" && obj.networks === "") || 
         obj.category === "" || obj.surname === "" || 
              obj.profession === ""){
            return;
      }return obj;
  }

  function deleteValueOfObj(){
    setObj(initObj);
  }
  let showFillingForm;

  if(visibleInputs !== false){ //показываем по флагу в сторе
    showFillingForm = <div className="man-form">
      <SendDataButton sendHandler={sendHandler}
                hideInputs={hideInputs}
                showAddUsefulManButton={showAddUsefulManButton}
                dataOfMan={obj}
                checkObj={checkObj}
                deleteValueOfObj={deleteValueOfObj}/>
      <BackToMainButton hideAddUsefulManButton={hideAddUsefulManButton}
                hideInputs={hideInputs}
                deleteValueOfObj={deleteValueOfObj}
                />
        
   <div><div className="name-of-input-data">Категория</div> 
     <InputData 
       value={obj.category}
       objKey={'category'}
       changeHandler={changeHandler}
        placeholder={'*'}/>
   </div> 
   <div><div className="name-of-input-data">Фамилия</div>
     <InputData 
       value={obj.surname} 
       objKey={'surname'}
       changeHandler={changeHandler}
       placeholder={'*'}/>
    </div>
    <div><div className="name-of-input-data">Имя</div>
      <InputData
         value={obj.name} 
         objKey={'name'}
         changeHandler={changeHandler}/>
     </div>
   <div><div className="name-of-input-data">Профессия</div>
     <InputData 
       value={obj.profession} 
       objKey={'profession'}
       changeHandler={changeHandler}
       placeholder={'*'}/>
   </div>
   <div><div className="name-of-input-data">Виды работ</div> 
     <InputData  
       value={obj.job}
       objKey={'job'}
       changeHandler={changeHandler}/>
   </div>
   <div><div className="name-of-input-data">Телефон</div> 
     <InputData 
       value={obj.phone} 
       objKey={'phone'}
       changeHandler={changeHandler}
       placeholder={'**'}/>
   </div>
   <div><span className="name-of-input-data">Соцсети</span>
      <InputData 
        value={obj.networks}
        objKey={'networks'}
        changeHandler={changeHandler}
        placeholder={'**'}/>
    </div>

    <div>
        <p>* обязательные к заполнению поля</p>
        <p>** заполните одно из этих полей</p>
      </div>
                          
  </div>
  }

    return <div>
   {showFillingForm}
  </div>
}


export default FillingForm;


