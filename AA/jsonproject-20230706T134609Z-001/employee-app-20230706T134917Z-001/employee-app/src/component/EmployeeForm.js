import React from "react";
import { useNavigate, useParams } from "react-router-dom"
import ApiService from "../services/ApiService";

const EmployeeForm=()=>{
const {id}=useParams();
const navigate = useNavigate();
const api= new ApiService();
 const [employee, setEmployee]=React.useState({});
 const empIdChangeHandler=(event)=>{
 console.log(event.target.value)
 employee.empId=event.target.value;
 }
 const empNameChangeHandler=(event)=>{
    console.log(event.target.value)
    employee.empName=event.target.value;
    }
    const empSalaryChangeHandler=(event)=>{
    console.log(event.target.value)
     employee.salary=event.target.value;
     }
     const empGenderChangeHandler=(event)=>{
     console.log(event.target.value)
    employee.gender=event.target.value;
    }
    const validate=()=>{
        let isValidationSuccess=true;
      
        if(employee.empId ==undefined || employee.empId<=0){
            isValidationSuccess=false;
        }
        if(employee.empName ==undefined || employee.empName==""){
            isValidationSuccess=false;
        }
        if(employee.salary ==undefined || employee.salary<=0){
            isValidationSuccess=false;
        }
        if(employee.gender ==undefined || employee.gender==""){
            isValidationSuccess=false;
        }
        return isValidationSuccess;
    }
        const submitHandler=(event)=>{
            event.preventDefault();
            employee.deptId=id;
            console.log(employee);
           let isValidationSuccess= validate();
           if(isValidationSuccess){
            api.addNewEmployee(employee).then( r=>{alert("Added");} );
           }
           else{
            alert("validation failed ....")
           }
        }    
        const goBack=()=>{
            navigate("/departments")
        }     
    return <div class="container">
       Employee Form and the dept id id {id}
       <form onSubmit={submitHandler}>
        <label>
            Employee Id
        </label>
        <input type ="text" className="form-control" onChange={empIdChangeHandler}></input>
        <label>
            Employee Name
        </label>
        <input type ="text" className="form-control" onChange={empNameChangeHandler}></input>
        <label>
          Gender
        </label>
        <select  className="form-control" onChange={empGenderChangeHandler}>
            <option></option>
            <option>Male</option>
            <option>Female</option>
        </select>
                <label>
            Salary
        </label>
        <input type ="text" className="form-control" onChange={empSalaryChangeHandler}></input>
       
        <button type="submit" className="btn btn-primary">Add Employee</button>
        &nbsp;  &nbsp;  &nbsp;
        <button type="button" onClick={goBack} className="btn btn-primary">Back</button>
       </form>
    </div>
}
export default EmployeeForm