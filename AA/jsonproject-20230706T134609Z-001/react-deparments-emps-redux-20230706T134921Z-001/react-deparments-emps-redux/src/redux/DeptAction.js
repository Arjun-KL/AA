import ApiService from "../components/services/ApiService";

export const ADD_DEPT ="ADD_DEPT";
export const READ_ALL_DEPTS ="READ_ALL_DEPTS";

export const addNewDept=(department)=>{
    return {type:ADD_DEPT,department}
}

export const getAllDepartments=   ()=>{
    return async function(dispatch){
        const response     = await  new ApiService().getAllDepts();
        console.log(response.data)
        dispatch( {type:READ_ALL_DEPTS,payload:response.data})
    }
 
}