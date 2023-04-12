import React from "react";


function AddNewManInThisCategoryButton({
     sendHandler,
     dataOfMan,
     setEditingManId,
     id
     }){
    return <button className="panel-button" id="right-button"
                        onClick={()=>{
                                sendHandler(dataOfMan);
                                setEditingManId(id)
                            
                            }}>добавить человека</button>
}

export default AddNewManInThisCategoryButton;