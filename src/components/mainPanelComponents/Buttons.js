import React, {useState} from "react";
import CreateCategoryButton from "./СreateCategoryButton";
import AddUsefulManButton from "./AddUsefulManButton";
import InputNewCategory from "./InputNewCategory";
import ShowCategoriesList from "../../container/ShowCategoriesList";


function Buttons(
    {showInputs,
    visible,
    hideAddUsefulManButton,
    showInputCategory,
    visibleInputCategory,
    visibleCategoryPanel,
    addCategory}){

        const style ={
            paddingTop: '8px'
        }
   
    const[valueOfInput, setValueOfInput] = useState('');
    function changeState(value){
        setValueOfInput(value);
    }

    console.log(visibleCategoryPanel)

    let res;
        if(visible !== false){
          res = <div style={style}>
          <CreateCategoryButton 
          showInputCategory={showInputCategory}
          showInputs={showInputs}/>
          <AddUsefulManButton
          showInputs={showInputs}
          hideAddUsefulManButton={hideAddUsefulManButton}
          />
          <ShowCategoriesList/>
      </div>
} if(visibleInputCategory !== false){
    res = <div style={style}>
          <CreateCategoryButton 
              valueOfInput={valueOfInput}
              addCategory={addCategory} 
              changeState={changeState}
              showInputCategory={showInputCategory}      
          />
           <InputNewCategory 
              changeState={changeState}
              showInputCategory={showInputCategory}/>
           <ShowCategoriesList/>   
      </div>  
} if(!visibleCategoryPanel){
   res = <ShowCategoriesList/>
}
    return <div>
        {res}
    </div>
}

export default Buttons;