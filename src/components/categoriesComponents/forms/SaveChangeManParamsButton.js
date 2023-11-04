import React, { useRef, useState } from "react";
import { Overlay } from "react-bootstrap";
import icon from "../../../icons/save.png"

function SaveChangeManParamsButton({setEditingManId, saveEditMan, item, id}){

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
   
          return <div className="col-5 col-lg-4 col-md-6 col-sm-6">
              <button  className="save-button-categ" 
                      id={id}
                      ref={target}
                      onMouseOver={() => setShow(true)} 
                      onMouseLeave={() => setShow(false)}
                      onClick={()=>{
                    if (checkInputs(item)) {
                      saveEditMan(item);
                      setEditingManId(undefined); 
                      }  
                    }}>
                    <img className="save-img-categ" src={icon} alt=""/>
                  </button>
                  <Overlay target={target.current} show={show} placement="top">
                  {({hasDoneInitialMeasure, placement, arrowProps, show:_show, popper, ...props}) => (
                    <div className="tooltip" 
                         {...props}>
                      <span id="tooltip-text">Coxранить в этой категорию</span>
                    </div>
                  )}
                </Overlay>
                </div>
}


export default SaveChangeManParamsButton;