import { ADD_DEPT,READ_ALL_DEPTS } from "./DeptAction";
const departments=[];
const initialState={departments:departments}

export const  DepartmentReducer=(state =initialState,action)=>{
  
    switch(action.type){
        case ADD_DEPT:
            return {...state,  departments:action.payload}
       
        case READ_ALL_DEPTS:
            console.log("reading all depts")
            console.log(action.payload)
            return {...state.departments,  departments:action.payload}
          
         default:
            console.log("default")
            return state;
    }
    }