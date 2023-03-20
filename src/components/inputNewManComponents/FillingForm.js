import React, { useState } from "react";
import SendDataButton from "./SendDataButton";
import InputData from "./InputData";
import { nanoid } from "@reduxjs/toolkit";

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




function FillingForm({visibleInputs,sendHandler, hideInputs,showAddUsefulManButton}){

  const [obj, setObj] = useState(initObj);

  function changeHandler(prop, event){
    setObj({...obj, ...{[prop]: event.target.value},id: nanoid()})
  }

  

  function checkObj(obj){  //проверка на заполнение инпутов
    for(let key in obj){
      if(obj[key] === ""){
        alert('Заполните все поля');
        return;
      }
    } return obj;
  }

  function deleteValueOfObj(){
    setObj(initObj);
  }

 
 

  let showFillingForm;

  if(visibleInputs !== false){ //показываем по флагу в сторе
    showFillingForm = <div>
   <p>Категория: <InputData value={obj.category} objKey={'category'}
     changeHandler={changeHandler}/></p> 
   <p>Фамилия:<InputData value={obj.surname} objKey={'surname'}
     changeHandler={changeHandler}/></p>
    <p>Имя:<InputData value={obj.name} objKey={'name'}
     changeHandler={changeHandler}/></p>
   <p>Профессия:<InputData value={obj.profession} objKey={'profession'}
     changeHandler={changeHandler}/></p>
   <p>Виды работ: <InputData value={obj.job} objKey={'job'}
     changeHandler={changeHandler}/></p>
   <p>Телефон: <InputData value={obj.phone} objKey={'phone'}
     changeHandler={changeHandler}/></p>
   <p>Соцсети: <InputData value={obj.networks} objKey={'networks'}
     changeHandler={changeHandler}/></p>


<SendDataButton sendHandler={sendHandler}
                hideInputs={hideInputs}
                showAddUsefulManButton={showAddUsefulManButton}
                dataOfMan={obj}
                checkObj={checkObj}
                deleteValueOfObj={deleteValueOfObj}/>
  </div>
  }

    return <div>
   {showFillingForm}
  </div>
}


export default FillingForm;


