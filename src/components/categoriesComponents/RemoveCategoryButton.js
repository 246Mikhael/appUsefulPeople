import React, { useRef, useState } from "react";
import { Overlay } from "react-bootstrap";
import icon from "../../icons/delete1.png"




function RemoveCategotyButton({ removeCategory, 
                                item
                              }) {

    const [show, setShow] = useState(false);
    const target = useRef(null);

    return <div> 
           <button className="delete-button-categ"
                   ref={target}
                   onMouseOver={() => setShow(true)} 
                   onMouseOut={() => setShow(false)} 
                   onClickCapture={(e)=> { removeCategory(item)
                                       e.nativeEvent.stopPropagation() }}>
              <img className="delete-img-categ"
                   src={icon} alt=""></img>
           </button>
            <Overlay target={target.current} show={show} placement="bottom">
            {({hasDoneInitialMeasure, placement, arrowProps, show:_show, popper, ...props}) => (
              <div className="tooltip" 
                   {...props}>
                <span id="tooltip-text">Удалить категорию</span>
              </div>
            )}
          </Overlay>
       </div>    
}

export default RemoveCategotyButton;