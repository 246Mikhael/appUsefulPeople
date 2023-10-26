import React, { useRef, useState } from "react";
import { Overlay } from "react-bootstrap";

function BackToMainButton({
    hideAddUsefulManButton, 
    hideInputs,
    deleteValueOfObj,
    id
  }){

        const [show, setShow] = useState(false);
        const target = useRef(null);

    return <div className="col-6 col-sm-4 col-md-4 col-lg-4">
      <button className="panel-button" id={id}
      ref={target}
      onMouseOver={() => setShow(true)} 
      onMouseLeave={() => setShow(false)}
      onClick={()=>{
        hideAddUsefulManButton();
        hideInputs();
        deleteValueOfObj()
    }}>
        назад
    </button>
     <Overlay target={target.current} show={show} placement="bottom">
     {({hasDoneInitialMeasure, placement, arrowProps, show:_show, popper, ...props}) => (
       <div className="tooltip" 
            {...props}>
         <span id="tooltip-text">вернуться к категориям без сохранения</span>
       </div>
     )}
   </Overlay>
   </div>
}

export default BackToMainButton;