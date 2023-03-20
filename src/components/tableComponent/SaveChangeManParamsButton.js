import React from "react";

function SaveChangeManParamsButton({setEditingManId, saveEditMan, item}){
   

    function checkInputs(obj){
    for(let key in obj){
        if(!obj[key]){
            alert('Заполните все поля');
            setEditingManId(obj.id)
            break;   

        }  
        saveEditMan(item);
         setEditingManId(undefined)
    }

}
    return <button onClick={()=>{
       if(checkInputs(item)){
        checkInputs(item);
        
       
       }

    }}>coxpанить</button>
}


export default SaveChangeManParamsButton;