import React from "react";


function SendDataButton({
    propsAddMan
  }){

    return <div className="col-6 col-sm-4 col-md-4 col-lg-4">
       <button className="panel-button" id="left-button"
       onClick={()=>{
        if(propsAddMan.checkObj(propsAddMan.dataOfMan)){
            propsAddMan.sendHandler(propsAddMan.dataOfMan);
            propsAddMan.hideInputs();
            propsAddMan.showAddUsefulManButton();
            propsAddMan.deleteValueOfObj()
    }
         }}>
            Добавить
            </button>
          </div>  
}

export default SendDataButton;