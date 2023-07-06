import axios from 'axios';
const baseEmployeesURL = "http://localhost:9999/employees/";
const baseDepartmentsURL = "http://localhost:9999/departments/";
class ApiService {
 getAllEmps=()=> {
return axios.get(baseEmployeesURL);
}

 getAllDepts=()=> {
    return axios.get(baseDepartmentsURL);
    }
searchEmployeeById=(id)=>{
    return   axios.get(`${baseEmployeesURL}${id}`)
}

updateEmployee=(id,employee)=>{
    return axios.put(`${baseEmployeesURL}${id}`,employee);
}
addNewEmp=(deptId, employee)=>{
return  axios.post(`${baseEmployeesURL}${deptId}`,employee)
}
deleteEmp=(empId)=>{
    return   axios.delete(`${baseEmployeesURL}${empId}`)
}
}
    export default ApiService;
