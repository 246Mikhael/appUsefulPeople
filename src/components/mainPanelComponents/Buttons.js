import React from "react";
import AddUsefulManButton from "./AddUsefulManButton";
import ShowCategoriesList from "../../container/ShowCategoriesList";


function Buttons({
    showInputs,
    visible,
    hideAddUsefulManButton,
    visibleCategoryPanel,
    }) {
 
   

    let res;
        if(visible !== false){
          res = <>
            <div className="container">
               <div className="row justify-content-center mt-5">
                    <div className="col-6 col-lg-4 col-md-6 col-sm-6">
                        <AddUsefulManButton
                            showInputs={showInputs}
                            hideAddUsefulManButton={hideAddUsefulManButton}/> 
                    </div>
                </div>
            </div>
            <ShowCategoriesList/>
          </>
}  if (!visibleCategoryPanel) {
     res = <ShowCategoriesList/>
}
    return <div>
        {res}
    </div>
}

export default Buttons;