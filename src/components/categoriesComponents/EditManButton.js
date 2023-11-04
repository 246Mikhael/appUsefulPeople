import React, { useRef, useState } from "react";
import { Overlay } from "react-bootstrap";
import icon from "../../icons/edit1.png"



function EditManButton({
                        setEditingManId,
                        id
                        }) {

  const [show, setShow] = useState(false);
  const target = useRef(null);

  

    return  <div id="edit-man-wrap">
               <button id="edit-man-table-button"
                       ref={target}
                       onMouseOver={() => setShow(true)} 
                       onMouseLeave={() => setShow(false)} 
                       onClick={()=>{setEditingManId(id)}}>
                    <img className="delete-img-categ" src={icon} alt=""/>
              </button>
              <Overlay target={target.current} show={show} placement="bottom">
                {({hasDoneInitialMeasure, placement, arrowProps, show:_show, popper, ...props}) => (
                  <div className="tooltip" 
                     {...props}>
                     <span id="tooltip-text">
                       редактировать
                     </span>
                  </div>
                 )}
              </Overlay>
            </div>  
              
}


export default EditManButton;