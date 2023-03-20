import React from "react";


function DeleteManButton({id, delMan, categ}){
  return <button onClick={()=> delMan({id,categ})}>удалить</button>
}

export default DeleteManButton;