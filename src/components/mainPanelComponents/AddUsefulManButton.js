import React from "react";

function AddUsefulManButton({showInputs,hideAddUsefulManButton}){
 

return <button 
onClick={()=>{showInputs();
  hideAddUsefulManButton()
}}>Добавить человека</button>
}

export default AddUsefulManButton;