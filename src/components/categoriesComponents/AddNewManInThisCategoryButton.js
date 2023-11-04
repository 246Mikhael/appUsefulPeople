import React, { useRef, useState } from "react";
import { Overlay } from "react-bootstrap";
import icon from "../../icons/add.png"

function AddNewManInThisCategoryButton({
        showInputs, 
        item, 
        addMan
     }
     ){

        const [show, setShow] = useState(false);
        const target = useRef(null);

 

    return <>
         <button  className="add-button-categ" 
                  ref={target}                  
                  onMouseOver={() => setShow(true)}                        
                  onMouseLeave={() => setShow(false)}                        
                  onClick={()=>{  
                          addMan('category', item.category)
                          showInputs(true)
                         }} >
                  <img className="add-img-categ" src={icon} alt=""/>
          </button>
          <Overlay target={target.current} show={show} placement="top">
                    {({hasDoneInitialMeasure, placement, arrowProps, show:_show, popper, ...props}) => (
                      <div className="tooltip" 
                           {...props}>
                        <span id="tooltip-text">Добавить в эту категорию</span>
                      </div>
                    )}
          </Overlay>
        </>
}

export default AddNewManInThisCategoryButton;