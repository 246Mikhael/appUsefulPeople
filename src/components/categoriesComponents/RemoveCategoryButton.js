import React, { useRef, useState } from "react";
import { Overlay } from "react-bootstrap";
import icon from "../../icons/delete2.png"




function RemoveCategotyButton({ removeCategory, 
                                item,
                                setEditMode
                              }) {

    const [show, setShow] = useState(false);
    const target = useRef(null);

    return <> 
           <button className="delete-button-categ"
                   ref={target}
                   onMouseOver={() => setShow(true)} 
                   onMouseOut={() => setShow(false)} 
                   onClickCapture={(e)=> { removeCategory(item.category)
                                            setEditMode(false)
                                           console.log(item)
                                       e.nativeEvent.stopPropagation()}}>
              <img className="delete-img-categ"
                   src={icon} alt=""></img>
           </button>
            <Overlay target={target.current} show={show} placement="top">
            {({hasDoneInitialMeasure, placement, arrowProps, show:_show, popper, ...props}) => (
              <div className="tooltip" 
                   {...props}>
                <span id="tooltip-text">Удалить категорию</span>
              </div>
            )}
          </Overlay>
       </>    
}

export default RemoveCategotyButton;