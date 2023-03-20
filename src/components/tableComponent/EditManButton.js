import React from "react";


function EditManButton({setEditingManId,id}){
    return <button onClick={()=>{setEditingManId(id)}}>редактировать</button>
}


export default EditManButton;