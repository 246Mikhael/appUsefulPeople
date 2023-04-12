import React from "react";


function RemoveCategotyButton({removeCategory, item}){
    return <button className="right-categ-button"
     onClick={()=> removeCategory(item)}>удалить</button>
}

export default RemoveCategotyButton;