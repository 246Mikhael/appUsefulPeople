import React, { useRef, useState } from "react";
import { Overlay } from "react-bootstrap";
import icon from "../../icons/save.png"




function EditCategButton({ setEditMode }) {

    const [show, setShow] = useState(false);
    const target = useRef(null);

    return <> 
           <button className="save-button-categ"
           onClick={() => setEditMode(false)}
                   ref={target}
                   onMouseOver={() => setShow(true)} 
                   onMouseOut={() => setShow(false)} 
                  >
              <img className="save-img-categ"
                   src={icon} alt=""></img>
           </button>
            <Overlay target={target.current} show={show} placement="top">
            {({hasDoneInitialMeasure, placement, arrowProps, show:_show, popper, ...props}) => (
              <div className="tooltip" 
                   {...props}>
                <span id="tooltip-text">Сохранить изменения</span>
              </div>
            )}
          </Overlay>
       </>    
}

export default EditCategButton;