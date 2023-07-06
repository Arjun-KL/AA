import axios from "axios";
const baseDepartmentUrl="http://localhost:9999/departments";
const baseEmployeeUrl="http://localhost:9999/employees";
class ApiService{
    getAllDepts(){
        //get() returns Promise object
        return axios.get(baseDepartmentUrl);
    }
    addNewEmployee(employee){
        return axios.post(baseEmployeeUrl,employee);
    }
   
}
export default ApiService;