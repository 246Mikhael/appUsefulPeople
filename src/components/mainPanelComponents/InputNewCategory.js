import React from "react";

function InputNewCategory({
    changeState, 
    addCategory, 
    showInputCategory,
    valueOfInput
}) {
    return <input id="new-category-input" 
                
                  onChange={(event)=>{
                     changeState(event.target.value)
                  }}
                  onKeyDown = {(event) => {
                    if (event.code === "Enter") {
                        addCategory(valueOfInput);
                        changeState('');
                        showInputCategory();
                    }
                  }}
                  >

                  </input>
}

export default InputNewCategory;