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

   
    const[valueOfInput, setValueOfInput] = useState('');
    function changeState(value){
        setValueOfInput(value);
    }
    

    let res;
        if(visible !== false){
          res = <>
            <div className="container">
               <div className="row justify-content-center mt-5">
                    <div className="col-6 col-lg-4 col-md-6 col-sm-6">
                        <CreateCategoryButton 
                            showInputCategory={showInputCategory}
                            showInputs={showInputs}
                            visible={visible}/>
                    </div>
                    <div className="col-6 col-lg-4 col-md-6 col-sm-6">
                        <AddUsefulManButton
                            showInputs={showInputs}
                            hideAddUsefulManButton={hideAddUsefulManButton}/> 
                    </div>
                </div>
            </div>
            <ShowCategoriesList/>
          </>
} if(visibleInputCategory !== false){
    res = <>
        <div className="container">
            <div className="row justify-content-center mt-5 buttons-wrap"> 
                <div className="col-6 col-lg-4 col-md-6 col-sm-6 button-main-panel">
                    <CreateCategoryButton 
                        valueOfInput={valueOfInput}
                        addCategory={addCategory} 
                        changeState={changeState}
                        showInputCategory={showInputCategory}/>
                </div>
                <div className="col-6 col-lg-4 col-md-6 col-sm-6 button-main-panel">
                    <InputNewCategory 
                        addCategory={addCategory}
                        changeState={changeState}
                        showInputCategory={showInputCategory}
                        valueOfInput={valueOfInput}/>
                </div>       
            </div>         
      </div> 
      <ShowCategoriesList/>   
    </> 

} if(!visibleCategoryPanel){
   res = <ShowCategoriesList/>
}
    return <div>
        {res}
    </div>
}

export default Buttons;