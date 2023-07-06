import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { readAllEmps,getAllEmployees } from '../redux/EmpAction';
import Employee from './Employee';
import ApiService from './services/ApiService';

//import getAllEmps from './services/ApiService';
const EmployeeList = () => {
    const baseURL = "http://localhost:9999/employees/";
    const navigate = useNavigate();
    //const [employees, setEmployees] = React.useState([]);
      const [removeSelectedId, setRemoveSelectedId] = React.useState([0]);
const  api= new  ApiService();
const dispatch=useDispatch();

const employees=useSelector(state=>state.employees.employees)

    React.useEffect(() => {
        console.log("useEfect ...")
        dispatch(getAllEmployees());
         
    }
     ,[]);
    
return(
        <div>
            <h1>EmployeeList</h1>
            {
                employees.map(e=> <Employee id={e.empId}  gender={e.gender} name={e.empName} salary ={e.salary} dept={e.department.deptName} ></Employee>)
            }
        </div>
    );
}
export default EmployeeList;