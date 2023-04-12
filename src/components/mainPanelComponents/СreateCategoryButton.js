import React from "react";

function CreateCategoryButton({showInputCategory,
    valueOfInput,
    addCategory,
    changeState
}){
    
    return <button className="panel-button" id="left-button" onClick={()=>{
        if(!valueOfInput){
        showInputCategory()
     } else {
         
            addCategory(valueOfInput);
            changeState('');
            showInputCategory();
         
     }
    }
        }>
            создать категорию
            </button>
}

export default CreateCategoryButton;