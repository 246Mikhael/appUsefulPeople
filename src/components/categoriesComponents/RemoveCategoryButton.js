import React from "react";


function RemoveCategotyButton({removeCategory, item}){
    return <button onClick={()=> removeCategory(item)}>Удалить</button>
}

export default RemoveCategotyButton;