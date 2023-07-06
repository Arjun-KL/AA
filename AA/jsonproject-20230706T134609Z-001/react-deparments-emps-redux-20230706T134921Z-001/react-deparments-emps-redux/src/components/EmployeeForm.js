import React, { Component ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { readById, updateEmp, updateEmpName } from "../redux/EmpAction";
//import { Form, Button } from 'semantic-ui-react';
//import { useForm } from "react-hook-form";
//import axios from 'axios';
import ApiService from './services/ApiService';

const EmployeeForm=()=>{
    const baseURL = "http://localhost:9999/employees/";
    const { id } = useParams();
    const navigate = useNavigate();
    const  api= new  ApiService();

    const [edit, setEdit] = React.useState(false);
    const [read, setRead] = React.useState(true);

    const [enteredEmpName,setEmpName]=useState('')
    const [enteredGender,setGender]=useState('')
    const [enteredSalary,setSalary]=useState('')
    const dispatch=useDispatch();
    const employee=useSelector(state=>state.employees)


const nameChangeHandler=(event)=>{
    console.log(event.target.value)
  
   employee.empName=event.target.value;
   dispatch(updateEmp(employee))
}

const salaryChangeHandler=(event)=>{
    employee.salary=event.target.value;
    dispatch(updateEmp(employee))
}
const goBack=()=>{
    navigate("../employees");
}

const submitHandler=(event)=>{
    event.preventDefault();
    console.log(employee)
  setEdit(true);
  }

    React.useEffect(() => {
        console.log("use Effect .......")
        if(read) {
        
           dispatch(readById(id))
      
         setRead(false)
       // });
    }
        console.log(edit)
        if(edit){
          api.updateEmployee(id,employee).then( (response)=>{
                console.log("updated");
                setEdit(false)
                navigate("../employees");
            })
        }
      });
    
    
return (<div className="container">

    Employee Form
    <form onSubmit={submitHandler}>
    <label>Employee Id </label>
    <input type="text" className="form-control" value={employee.empId} readOnly/>
    <label>First Name</label>
    <input type="text" className="form-control"  value={employee.empName} onChange={nameChangeHandler} />

    
    <label>Gender</label>
    <input type="text" className="form-control" value={employee.gender} />
    <label>Salary</label>
    <select className="form-control" value={employee.salary} onChange={salaryChangeHandler} />
      <button  type="submit" className="btn btn-success">Edit</button> &nbsp;
      <button  type="button" onClick={goBack} className="btn btn-success">Back</button>

    </form>
    </div>
)
}

export default EmployeeForm;