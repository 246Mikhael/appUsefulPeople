import React from "react";

function SaveChangeManParamsButton({setEditingManId, saveEditMan, item}){
   

    function checkInputs(obj){  //проверка на заполнение инпутов
        if((obj.phone ==="" && obj.networks === "") || 
         obj.surname === "" ||  obj.profession === ""){
            setEditingManId(obj.id);
           return;
     } 
     saveEditMan(item);
     setEditingManId(undefined);
 }
 

    return <button className="man-table-button" id="save-man-table-button"
     onClick={()=>{
       if(checkInputs(item)){
        checkInputs(item);
        
       
       }

    }}>coxpанить</button>
}


export default SaveChangeManParamsButton;