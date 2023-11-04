import React, { useRef, useState } from "react";
import { Overlay } from "react-bootstrap";
import icon from "../../icons/edit1.png"




function EditCategButton({ 
                          setEditMode, 
                          item
                         }) {

    const [show, setShow] = useState(false);
    const target = useRef(null);

    return <> 
           <button className="edit-button-categ"
           onClick={() => {
                setEditMode(true);
              }}
                   ref={target}
                   onMouseOver={() => setShow(true)} 
                   onMouseOut={() => setShow(false)} 
                  >
              <img className="edit-img-categ"
                   src={icon} alt=""></img>
           </button>
            <Overlay target={target.current} show={show} placement="top">
            {({hasDoneInitialMeasure, placement, arrowProps, show:_show, popper, ...props}) => (
              <div className="tooltip" 
                   {...props}>
                <span id="tooltip-text">Редактировать категорию</span>
              </div>
            )}
          </Overlay>
       </>    
}

export default EditCategButton;