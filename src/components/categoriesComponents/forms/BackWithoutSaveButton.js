import React, { useRef, useState } from "react";
import { Overlay } from "react-bootstrap";
import icon from "../../../icons/back.png";
import { nanoid } from "@reduxjs/toolkit";

function BackWithoutSaveButton({ showInputs, setNewManValues }){

    const [show, setShow] = useState(false);
    const target = useRef(null);
   
   
          return <div className="col-5 col-lg-4 col-md-6 col-sm-6">
              <button  className="save-button-categ" 
                      ref={target}
                      onMouseOver={() => setShow(true)} 
                      onMouseLeave={() => setShow(false)}
                      onClick={()=>{
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
                    }}>
                    <img className="save-img-categ" src={icon} alt=""/>
                  </button>
                  <Overlay target={target.current} show={show} placement="top">
                  {({hasDoneInitialMeasure, placement, arrowProps, show:_show, popper, ...props}) => (
                    <div className="tooltip" 
                         {...props}>
                      <span id="tooltip-text">Уйти без сохранения</span>
                    </div>
                  )}
                </Overlay>
                </div>
}


export default BackWithoutSaveButton;