export function addData(dataOfMan){
   return {type: 'ADD_DATA', dataOfMan}
}

export function removeCateg(item){
   return {type:'REMOVE_CATEG', item}
}

export function addCateg(value){
   return {type:'ADD_CATEG', value}
}

export function deleteMan(params){
   return {type:'DELETE_MAN', params}
}

export function setEditManId(id){
   return {type:'EDIT_MAN_ID', id}
}

export function editMan(item){
   return {type:'EDIT_MAN', item}
}

export function addMan(params){
   return {type: 'ADD_MAN_IN_CATEGORY', params}
}
export function setEditCateg(item){
   return {type:'EDIT_CATEG', item}
}