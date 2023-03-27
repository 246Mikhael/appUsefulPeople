import { configureStore } from '@reduxjs/toolkit'
import reducer from '../reducers/reducers'

const loadState = () => {
let preloadedState = localStorage.getItem('reduxState');
   if(preloadedState === null){
    return preloadedState = 
    {

        visibleInputs: false,
        visibleAddUsefulManButton: true,
        visibleCategoryInput: false,
        visibleCategoryPanel: true,
        manIdEditMode: undefined,
        usefulPeople:{}
    }
 }else {
        return JSON.parse(preloadedState)
    }
}

export const store = configureStore({
    reducer: reducer,
    preloadedState: loadState()
    
})

console.log(store);
console.log(loadState())

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

