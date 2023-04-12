import React from "react";


function DeleteManButton({id, delMan, categ}){
  return <button className="man-table-button" id="del-man-table-button"
           onClick={()=> delMan({id,categ})}>
            удалить
        </button>
}

export default DeleteManButton;