import React, { useRef, useState } from "react";
import { Overlay } from "react-bootstrap";

function AddUsefulManButton({ 
                             showInputs,
                             hideAddUsefulManButton
                            }) {

  const [show, setShow] = useState(false);
  const target = useRef(null);
 

return <div>
    <button className="panel-button"
               ref={target}
               onMouseOver={() => setShow(true)} 
               onMouseLeave={() => setShow(false)} 
               id="center-button"
               onClick={() =>  { showInputs();
                                 hideAddUsefulManButton()
                                }
                        }>
                          добавить человека
        </button>
        <Overlay target={target.current} show={show} placement="bottom">
          {({hasDoneInitialMeasure, placement, arrowProps, show:_show, popper, ...props}) => (
            <div className="tooltip" 
                 {...props}>
              <span id="tooltip-text">Добавь нужного специалиста</span>
            </div>
          )}
        </Overlay>
        </div>
}

export default AddUsefulManButton;