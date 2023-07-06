import { ADD_EMP, DELETE_EMP, READ_ALL_EMPS, READ_EMP_BY_ID, updateEmpName, UPDATE_EMP, UPDATE_EMPNAME } from "./EmpAction";

const employees=[];

const initialState={employees:employees}
export const  EmpReducer=(state =initialState,action)=>{
  
switch(action.type){
    case ADD_EMP:
        return {...state,  employees:action.payload}
    case READ_EMP_BY_ID:
        console.log(("read by eid"))
        console.log(action.payload)
        return {...state,  ...action.payload}

        case UPDATE_EMP:
         return {...state,...action.payload}
    case READ_ALL_EMPS:
        console.log("reading all emps")
        console.log(action.payload)
        return {...state.employees,  employees:action.payload}
       case DELETE_EMP:
            console.log("delete emps")
            return {} ;
     default:
        console.log("default")
        return state;
}
}