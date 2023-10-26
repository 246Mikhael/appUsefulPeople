import React, { useRef, useState } from "react";
import { Overlay } from "react-bootstrap";

function CreateCategoryButton({
    showInputCategory,
    valueOfInput,
    addCategory,
    changeState,
    visible
}){

    const [show, setShow] = useState(false);
    const target = useRef(null);

    let tooltip;

    if (visible) {
        tooltip =  <Overlay target={target.current} show={show} placement="bottom">
            {({hasDoneInitialMeasure, placement, arrowProps, show:_show, popper, ...props}) => (
          <div className="tooltip" 
               {...props}>
            <span id="tooltip-text">
                например, ремонт или авто</span>
          </div>
        )}
      </Overlay>
    }
    
    return <div>
            <button className="panel-button" 
                   ref={target}
                   onMouseOver={() => setShow(true)} 
                   onMouseLeave={() => setShow(false)} 
                   id="left-button" 
                   onClick={()=>{
                      if(!valueOfInput){
                          showInputCategory()
                       } else {
                            addCategory(valueOfInput);
                            changeState('');
                            showInputCategory();
         
                       }
                    }}>
            { visible ? "создать категорию" : "сохранить категорию"}
            </button>
              {tooltip}
          
          </div>
            
}

export default CreateCategoryButton;