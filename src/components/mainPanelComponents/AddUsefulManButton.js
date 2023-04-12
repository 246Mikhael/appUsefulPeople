import React from "react";

function AddUsefulManButton({showInputs,hideAddUsefulManButton}){
 

return <button className="panel-button" id="right-button"
onClick={()=>{showInputs();
  hideAddUsefulManButton()
}}>добавить человека</button>
}

export default AddUsefulManButton;