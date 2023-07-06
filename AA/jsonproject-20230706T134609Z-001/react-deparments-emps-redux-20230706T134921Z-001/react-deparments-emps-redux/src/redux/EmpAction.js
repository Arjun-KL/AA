import ApiService from "../components/services/ApiService";

export const ADD_EMP ="ADD_EMP";
export const READ_EMP_BY_ID ="READ_EMP_BY_ID";
export const READ_ALL_EMPS ="READ_ALL_EMPS";
export const DELETE_EMP="DELETE_EMP";
export const UPDATE_EMP="UPDATE_EMP";

    export const addNewEmp=(emp)=>{
        return {type:ADD_EMP,emp}
    }
    export const readById=(id)=>{
        return async function(dispatch){
            const response     = await  new ApiService().searchEmployeeById(id);
            console.log(response.data)
            dispatch( {type:READ_EMP_BY_ID,payload:response.data})
        }
   
    }

    export const updateEmp=(emp)=>{
        return {type:UPDATE_EMP,emp}
    }

    export const deleteById=(id)=>{
        return {type:DELETE_EMP,id}
    }


    export const getAllEmployees=   ()=>{
        return async function(dispatch){
            const response     = await  new ApiService().getAllEmps();
            console.log(response.data)
            dispatch( {type:READ_ALL_EMPS,payload:response.data})
        }
     
}
   