import React from "react";


function EditManButton({setEditingManId,id}){
    return <button className="man-table-button" id="edit-man-table-button"
                  onClick={()=>{setEditingManId(id)}}>
                    изменить
                    </button>
}


export default EditManButton;