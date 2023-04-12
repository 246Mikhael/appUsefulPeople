import React from "react";

function InputNewCategory({changeState}){
    return <input id="new-category-input"
     onChange={(event)=>{
        changeState(event.target.value)
    }
}></input>
}

export default InputNewCategory;