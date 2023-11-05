import { nanoid } from "@reduxjs/toolkit";
import React, { useRef, useState } from "react";
import { Overlay } from "react-bootstrap";

function EditParamOfManInput({
                   value,
                   changeHandler,
                   objKey,
                   placeholder, 
                   tooltipText,
                   newManValues,
                   sendHandler,
                   setNewManValues,
                   showInputs,
                   checkInputs,
                   setEditingManId,
                   item,
                   saveEditMan
                  }){

    const [show, setShow] = useState(false);
    const target = useRef(null);

    return <div className="col-8 input-in-categ">
                 <input 
                  value={value}
                  placeholder={placeholder}
                  onChange={event=>changeHandler(objKey,event.target.value)}
                  onKeyDown={(event) => {
                    if (event.code === 'Enter') {
                      if (newManValues && checkInputs(newManValues)) {

                        sendHandler(newManValues);

                        setNewManValues({ 
                          id: nanoid(),
                          category: '',
                          surname: "",
                          name: "",
                          profession: "",
                          job: "",
                          phone: "",
                          networks:""
                        })
                        showInputs(false)
                      }
                      if (item && checkInputs(item)) {
                        saveEditMan(item);
                        setEditingManId(undefined); 
                        } 
                    }
                  }}
                  ref={target}
                  onMouseOver={() => setShow(true)} 
                  onMouseLeave={() => setShow(false)}
                  />
             <Overlay target={target.current} show={show} placement="top">
                  {({hasDoneInitialMeasure, placement, arrowProps, show:_show, popper, ...props}) => (
                    <div className="tooltip-input" 
                         {...props}>
                      <span id="tooltip-text-input">{tooltipText}</span>
                    </div>
                  )}
                </Overlay>
                </div>      
}          

export default EditParamOfManInput;