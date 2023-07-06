import React, { Component ,useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import ApiService from "./services/ApiService";
import { useDispatch } from "react-redux";
import { addNewEmp } from "../redux/EmpAction";
import './NewEmployeeForm.css';
const NewEmployeeForm=()=>{
    const baseURL = "http://localhost:9999/employees/";
    const { id } = useParams();
    const navigate = useNavigate();
   
    const [employee, setEmployee] = React.useState([]);
    const [edit, setEdit] = React.useState(false);
    const [fetchDept, setfetchDept] = React.useState(false);

    const [read, setRead] = React.useState(true);
    let [enteredDeptId,setEnteredDeptId]=useState('')
    const [enteredEmpName,setEmpName]=useState('')
    const [enteredGender,setGender]=useState('')
    const [enteredSalary,setSalary]=useState('')
    const [errorName, setErrorName] = React.useState('');
    const [errorGender, setErrorGender] = React.useState('');
    const [errorSalary, setErrorSalary] = React.useState('');
    const [errorDeptId,setErrorDeptId]=React.useState('')
    const [departmentList,setDepartmentList]=React.useState([]);
const api = new ApiService();
const dispatch= useDispatch();
    const deptChangeHandler=(event)=>{
        console.log(event.target.value)
   //setEnteredDeptId(event.target.value);
   enteredDeptId=event.target.value;
   console.log(enteredDeptId)
   setEnteredDeptId(()=>{return event.target.value});
    }
const nameChangeHandler=(event)=>{
    console.log(event.target.value)
   // setEmpName(event.target.value)
   employee.empName=event.target.value;
   setEmployee((prevState)=>{
    return {...prevState,employee:event.target.value}
   })
}

const salaryChangeHandler=(event)=>{
    employee.salary=event.target.value;
    setEmployee((prevState)=>{
     return {...prevState,employee:event.target.value}
    })
}

const genderChangeHandler=(event)=>{
    employee.gender=event.target.value;
    setEmployee((prevState)=>{
     return {...prevState,employee:event.target.value}
    })
}
const goBack=()=>{
    navigate("../employees");

}

const validate=()=>{
    let isError=false;
    if(employee.empName=="" || employee.empName==undefined){
        setErrorName((prev)=> "Plz enter the Employee Name");
        isError=true;
    }
    if(employee.gender==="" || employee.gender==undefined){
        setErrorGender((prev)=> "Plz select the gender");
        isError=true;
    }
    if(employee.salary=="" || employee.salary==undefined){
        setErrorSalary((prev)=> "Plz enter the salary");
        isError=true;
    }
    if(enteredDeptId=="" || enteredDeptId==undefined){
        setErrorDeptId((prev)=> "Plz enter the deptId");
        isError=true;
    }
    console.log("is error ",isError)
    return isError;
}
const submitHandler=(event)=>{
    event.preventDefault();
    let x=validate();
    console.log(x)
    if(x==false)
       setEdit(true);
       else
       setEdit(false)
    
  }

    React.useEffect(() => {
        console.log("use Effect .......")
      
        console.log(edit)
        if(edit){
           api.addNewEmp(enteredDeptId,employee).then( (response)=>{
                console.log(response.status)
               dispatch(addNewEmp(employee))
                setEdit(false)
                navigate("../employees");
                window.location.reload();
            }).catch((err)=>{
                console.log(err.response.status)
                console.log("error");
                console.log(err.response.data);
              setErrorDeptId(()=>err.response.data.msg)
            })
        }
        if(fetchDept==false){
            api.getAllDepts().then((response)=>{
                setDepartmentList(response.data);
                console.log(response.data)
            })
        }
      },[edit,fetchDept]);
      const updateEmp=()=>{

      }
    
return (<div className="container">
<div  className="newEmpFormGroup"> <img id="newEmpImg" src="images/new_employee.jpg"></img></div>
   <div id="form"  className="newEmpFormGroup">
       <form onSubmit={submitHandler} >
    <div >
      <input  placeholder="Enter the Employee Name" type="text" className="form-control"  value={employee.empName} onChange={nameChangeHandler}/>
      <span className="invalid-feedback d-block" role="alert">{errorName}</span>

    </div>
    <div >
    <select placeholder="Gender" className="form-control" name="gender" value={employee.gender} onChange={genderChangeHandler}>
    <option value="" disabled selected hidden>Please select Gender...</option>
          <option value="male">Male</option>
          <option value="female"> Female</option>
      </select>
      <span className="invalid-feedback d-block" role="alert">{errorGender}</span>

      </div>
      <div >
    
    <input placeholder="Enter the Salary" type="text" className="form-control" value={employee.salary}  onChange={salaryChangeHandler}/>
    <span className="invalid-feedback d-block" role="alert">{errorSalary}</span>

    </div>
    <div>

    <input placeholder="Enter the  Department Id"  type="text" className="form-control" onChange={deptChangeHandler} />
    <select className="form-control" value={employee.salary} onChange={deptChangeHandler} >
        <option></option>
       {
       departmentList.map(d=> <option value={d.deptId}> {d.deptName} </option>)
       }
    </select>
    <span className="invalid-feedback d-block"  role="alert">{errorDeptId}</span>

  </div>
  <br></br>
  <div>

      <button  type="submit" className="btn btn-success">Add Emp</button> &nbsp;
      <button  type="button" onClick={goBack} className="btn btn-success">Back</button>

      </div>
    </form>
    </div>
    
    </div>
)
}

export default NewEmployeeForm;