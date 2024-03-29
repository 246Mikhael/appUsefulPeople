import  React from "react";
import EditParamOfManInput from "./EditParamOfManInput";
import SaveNewManInThisCategoryButton from "./SaveNewManInThisCategoryButton";
import BackWithoutSaveButton from "./BackWithoutSaveButton";
//import { nanoid } from "@reduxjs/toolkit";




function FormToAddInCateg ({ 
  setEditingManId, 
  saveEditMan, 
  showInputs, 
  sendHandler,
  newManValues,
  addMan,
  setNewManValues,
  checkInputs

 }) {

  

    return <div className="container">
       <SaveNewManInThisCategoryButton 
                setEditingManId={setEditingManId}
                saveEditMan={saveEditMan}
                newManValues={newManValues}
                changeHandler={addMan}
                showInputs={showInputs}
                sendHandler={sendHandler}
                setNewManValues={setNewManValues}
                checkInputs={checkInputs}
                />
       <BackWithoutSaveButton showInputs={showInputs} setNewManValues={setNewManValues}/>   
    <div className="row justify-content-center mt-2">

      <div className="row justify-content-center mt-3"> 
        <div className="col-4 name-of-input-in-categ">Фамилия</div> 
        <EditParamOfManInput value={newManValues.surname}
                           changeHandler={addMan}
                           objKey={'surname'}
                           checkInputs={checkInputs}
                           newManValues={newManValues}
                           sendHandler={sendHandler}
                           setNewManValues={setNewManValues}
                           showInputs={showInputs}
                           placeholder={'*'}
                           tooltipText={'*заполнение обязательно'}/>
       </div> 
       <div className="row justify-content-center mt-3">                  
           <div className="col-4 name-of-input-in-categ">Имя</div>                       
           <EditParamOfManInput value={newManValues.name}
                           changeHandler={addMan}
                           checkInputs={checkInputs}
                           newManValues={newManValues}
                           sendHandler={sendHandler}
                           setNewManValues={setNewManValues}
                           showInputs={showInputs}
                           objKey={'name'}
                           />
       </div>  
       <div className="row justify-content-center mt-3">                  
           <div className="col-4 name-of-input-in-categ">Сфера</div>                       
           <EditParamOfManInput value={newManValues.profession} 
                           changeHandler={addMan}
                           objKey={'profession'}
                           checkInputs={checkInputs}
                           newManValues={newManValues}
                           sendHandler={sendHandler}
                           setNewManValues={setNewManValues}
                           showInputs={showInputs}
                           placeholder={'*'}
                           tooltipText={'*заполнение обязательно'}/>
       </div> 
       <div className="row justify-content-center mt-3">                   
           <div className="col-4 name-of-input-in-categ">Скилл</div>                       
           <EditParamOfManInput value={newManValues.job} 
                           changeHandler={addMan}
                           checkInputs={checkInputs}
                           newManValues={newManValues}
                           sendHandler={sendHandler}
                           setNewManValues={setNewManValues}
                           showInputs={showInputs}
                           objKey={'job'}/>
       </div>  
       <div className="row justify-content-center mt-3">               
           <div className="col-4 name-of-input-in-categ">Телефон</div>                       
           <EditParamOfManInput value={newManValues.phone} 
                           changeHandler={addMan}
                           objKey={'phone'}
                           checkInputs={checkInputs}
                           newManValues={newManValues}
                           sendHandler={sendHandler}
                           setNewManValues={setNewManValues}
                           showInputs={showInputs}
                           placeholder={'**'}
                           tooltipText={'**заполните эту или соцсети'}/>
       </div> 
       <div className="row justify-content-center mt-3">                   
           <div className="col-4 name-of-input-in-categ">Соцсети</div>                        
           <EditParamOfManInput value={newManValues.networks}
                           changeHandler={addMan}
                           checkInputs={checkInputs}
                           newManValues={newManValues}
                           sendHandler={sendHandler}
                           setNewManValues={setNewManValues}
                           showInputs={showInputs}
                           objKey={'networks'}
                           placeholder={'**'}
                           tooltipText={'**заполните эту или телефон'}/>
      </div>
           
   </div>
  </div>
}

export default FormToAddInCateg;