import React, { useRef, useState } from "react";
import { Overlay } from "react-bootstrap";

function BackToMainButton({
    toggleVisibleCategoriesPanel, 
    hideAddUsefulManButton,
    setEditCateg}){

        const [show, setShow] = useState(false);
        const target = useRef(null);

    return <div className="col-5 col-lg-4 col-md-6 col-sm-6">  
        <button className="panel-button" id="left-button"
                ref={target}
                onMouseOver={() => setShow(true)} 
                onMouseLeave={() => setShow(false)}
                 onClick={()=>{toggleVisibleCategoriesPanel();
                               hideAddUsefulManButton();
                               setEditCateg(undefined)
                            }}>
                                назад
                </button>
                <Overlay target={target.current} show={show} placement="bottom">
                {({hasDoneInitialMeasure, placement, arrowProps, show:_show, popper, ...props}) => (
                  <div className="tooltip" 
                       {...props}>
                    <span id="tooltip-text">к странице с категориями</span>
                  </div>
                )}
              </Overlay>
              </div>
}

export default BackToMainButton;