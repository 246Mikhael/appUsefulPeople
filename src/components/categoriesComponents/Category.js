import React, { useRef, useState } from "react";
import { Overlay } from "react-bootstrap";
import RemoveCategotyButton from "./RemoveCategoryButton";

function Category({item,
    removeCategory,
    toggleVisibleCategoriesPanel,
    hideAddUsefulManButton,
    setEditCateg}){

      const [show, setShow] = useState(false);
      const target = useRef(null);

    return <div className="categ-div">
            
              <span id="category"
                    ref={target}
                    onMouseOver={() => setShow(true)} 
                    onMouseLeave={() => setShow(false)} 
                    onClick={() => { toggleVisibleCategoriesPanel();
                                     hideAddUsefulManButton();
                                     setEditCateg(item)
                                   }
                             }>
                  {item}
              </span>
              <Overlay target={target.current} 
                       show={show} 
                       placement="top">
                   {({ hasDoneInitialMeasure, placement, arrowProps, show:_show, popper, ...props}) => (
                   <div className="tooltip" 
                       {...props}>
                     <span id="tooltip-text">перейти к категории</span>
                   </div>
                 )}
              </Overlay> 
              <RemoveCategotyButton removeCategory={removeCategory} item={item}/>
           </div>
        
}

export default Category;