import React from "react";


function AddNewManInThisCategoryButton({
     sendHandler,
     dataOfMan,
     setEditingManId,
     id
     }){
    return <button onClick={()=>{
                                sendHandler(dataOfMan);
                              setEditingManId(id)
                            
                            }}>добавить человека</button>
}

export default AddNewManInThisCategoryButton;