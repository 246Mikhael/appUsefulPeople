
const initialState = {
    visibleInputs: false,
    visibleAddUsefulManButton: true,
    visibleCategoryInput: false,
    visibleCategoryPanel: true,
    manIdEditMode: undefined,
    editCateg: undefined,
    usefulPeople:{}
    
}

export default function addField(state = initialState, action){
    switch (action.type) {

        case 'ADD_FIELD':
            return Object.assign({}, state, {visibleInputs: !state.visibleInputs});

        case 'ADD_INPUT':
            return Object.assign({}, state, {visibleCategoryInput: !state.visibleCategoryInput});
        
        case 'CHANGE_VISIBILITY':
            return Object.assign({}, state, {visibleAddUsefulManButton: !state.visibleAddUsefulManButton});
    
        case 'PANEL_CATEGORIES_VISIBILITY':
            return Object.assign({}, state, {visibleCategoryPanel: !state.visibleCategoryPanel});


        case 'ADD_DATA': // здесь что-то наколхозил, но код работает
          let obj1;

          obj1 = state.usefulPeople[action.dataOfMan.category]; 

        if(obj1 !== undefined && 
            Object.prototype.toString.call(obj1) === '[object Object]'){
            
            return  Object.assign({}, state,{ 
                usefulPeople:
                {...state.usefulPeople,[action.dataOfMan.category]:
                   [action.dataOfMan, obj1]}})
        } 
        
        if(obj1 === undefined) {
            return  Object.assign({}, state,{ 
                usefulPeople:
                {...state.usefulPeople,[action.dataOfMan.category]:
                   [action.dataOfMan]}})
        } 
        
        if(obj1 !== undefined && Array.isArray(obj1)){
            return  Object.assign({}, state,{ 
                usefulPeople:
                {...state.usefulPeople,[action.dataOfMan.category]:
                   [action.dataOfMan].concat(obj1)}});
        }
        
        else {
            return Object.assign({},state);
        }
       
        
       case 'REMOVE_CATEG':
              let usefulPeople = {};
              Object.assign(usefulPeople, state.usefulPeople);
              delete usefulPeople[action.item];
              return Object.assign({}, state, {usefulPeople});
              
        case 'ADD_CATEG':
               return Object.assign({}, state, {
                usefulPeople: 
                {...state.usefulPeople,[action.value]:[]}
               });

        case 'DELETE_MAN':
           usefulPeople = {};
            Object.assign(usefulPeople, state.usefulPeople);

            let arr = usefulPeople[action.params.categ];

            let result = arr.filter(item => item.id !== action.params.id);

           usefulPeople = Object.assign({}, usefulPeople, {[action.params.categ]:result});
            
            return Object.assign({},state, {usefulPeople});
           
        case 'EDIT_MAN_ID':
            return Object.assign({}, state, {manIdEditMode: action.id});  
        
        case 'EDIT_MAN':

        usefulPeople = {};
        Object.assign(usefulPeople, state.usefulPeople);
        let arr1 = usefulPeople[action.item.category];

        let result1 = arr1.map(elem=>{
           if(elem.id === action.item.id){
             return action.item;
           } return elem;
        })

        usefulPeople = Object.assign({}, usefulPeople, {[action.item.category]:result1})
        return Object.assign({},state, {usefulPeople});

        case 'EDIT_CATEG':
            return Object.assign({}, state, {editCateg: action.item});

        
        default:
            return state;    
    }
    
    
}