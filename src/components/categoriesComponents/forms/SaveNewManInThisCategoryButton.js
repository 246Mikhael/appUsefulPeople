import React, { useRef, useState } from "react";
import { Overlay } from "react-bootstrap";
import icon from "../../../icons/save.png";
import { nanoid } from "@reduxjs/toolkit";


function SaveNewManInThisCategoryButton({
  newManValues,
  sendHandler,
  showInputs, 
  changeHandler,
  setNewManValues
     }
     ){

        const [show, setShow] = useState(false);
        const target = useRef(null);

        function checkInputs(obj) {  
          if ((obj.phone ==="" && obj.networks === "") || 
              obj.surname === "" ||  obj.profession === "") {
                  return false;
            } else {
              return true;
            }
   }

    return <>
         <button className="save-button-man"   
                       ref={target}
                        onMouseOver={() => setShow(true)} 
                        onMouseLeave={() => setShow(false)} 
                        onClick={()=>{
                          if (checkInputs(newManValues)) {

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
                          
                           }}
                         >
                <img className="save-img-categ" src={icon} alt=""/>
            </button>
                    <Overlay target={target.current} show={show} placement="top">
                    {({hasDoneInitialMeasure, placement, arrowProps, show:_show, popper, ...props}) => (
                      <div className="tooltip" 
                           {...props}>
                        <span id="tooltip-text">Добавить в эту категорию</span>
                      </div>
                    )}
                  </Overlay>
                  </>
}

export default SaveNewManInThisCategoryButton;