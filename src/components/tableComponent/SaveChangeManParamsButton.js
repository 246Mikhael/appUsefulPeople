import React, { useRef, useState } from "react";
import { Overlay } from "react-bootstrap";

function SaveChangeManParamsButton({setEditingManId, saveEditMan, item, id}){

    const [show, setShow] = useState(false);
    const target = useRef(null);
   

    function checkInputs(obj){  //проверка на заполнение инпутов
        if((obj.phone ==="" && obj.networks === "") || 
         obj.surname === "" ||  obj.profession === ""){
            setEditingManId(obj.id);
           return;
     } 
     saveEditMan(item);
     setEditingManId(undefined);
 }
   
          return <div className="col-5 col-lg-4 col-md-6 col-sm-6">
              <button className="panel-button" 
                   id={id}
                   ref={target}
                   onMouseOver={() => setShow(true)} 
                   onMouseLeave={() => setShow(false)}
                   onClick={()=>{
                     if (checkInputs(item)) {
                         checkInputs(item); 
                    }}}>
                   сохранить
                  </button>
                  <Overlay target={target.current} show={show} placement="bottom">
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