import React, {useState} from "react";
import CreateCategoryButton from "./СreateCategoryButton";
import AddUsefulManButton from "./AddUsefulManButton";
import InputNewCategory from "./InputNewCategory";


function Buttons(
    {showInputs,
    visible,
    hideAddUsefulManButton,
    showInputCategory,
    visibleInputCategory,
    addCategory}){

   
    const[valueOfInput, setValueOfInput] = useState('');
    function changeState(value){
        setValueOfInput(value);
    }

    let res;
        if(visible !== false){
          res = <div>
          <CreateCategoryButton 
          showInputCategory={showInputCategory}
          showInputs={showInputs}/>
          <AddUsefulManButton
          showInputs={showInputs}
          hideAddUsefulManButton={hideAddUsefulManButton}
          />
      </div>
} if(visibleInputCategory !== false){
    res = <div>
          <CreateCategoryButton 
              valueOfInput={valueOfInput}
              addCategory={addCategory} 
              changeState={changeState}
              showInputCategory={showInputCategory}      
          />
           <InputNewCategory 
              changeState={changeState}
              showInputCategory={showInputCategory}/>
      </div>  
}
    return <div>
        {res}
    </div>
}

export default Buttons;