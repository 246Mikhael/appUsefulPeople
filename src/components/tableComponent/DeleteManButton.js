import React, { useRef, useState } from "react";
import { Overlay } from "react-bootstrap";
import icon from "../../icons/delete1.png"


function DeleteManButton({id, delMan, categ}){

  const [show, setShow] = useState(false);
  const target = useRef(null);

  return <div id="del-man-wrap">
       <button  id="del-man-table-button"
                ref={target}
                onMouseOver={() => setShow(true)} 
                onMouseLeave={() => setShow(false)} 
                onClick={()=> delMan({id,categ})}>
            <img className="delete-img-categ" src={icon} alt=""/>
        </button>
          <Overlay target={target.current} show={show} placement="left">
             {({hasDoneInitialMeasure, placement, arrowProps, show:_show, popper, ...props}) => (
             <div className="tooltip" 
                {...props}>
                <span id="tooltip-text">
                   удалить
                </span>
             </div>
            )}
          </Overlay>
        </div>
}

export default DeleteManButton;