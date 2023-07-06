import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Employee from './Employee';
import ApiService from './services/ApiService';
import './Department.css'
import { useDispatch, useSelector } from 'react-redux';

import { getAllDepartments } from '../redux/DeptAction';

const DepartmentList = () => {
    const baseURL = "http://localhost:9999/departments/";
    const navigate = useNavigate();
    const  api= new  ApiService();
    const [errorDeptId, setErrorDeptId] = React.useState('');
    const [errorDeptName, setErrorDeptName] = React.useState('');

  //  const [departments, setDepartments] = React.useState([]);
    const [department, setDepartment] = React.useState([]);
    const [addDept, setAddDept] = React.useState(false);
    const departments = useSelector(state=>state.departments.departments);

    const dispatch=useDispatch();

    const deptIdChangeHandler=(event)=>{
       // employee.salary=event.target.value;
       department.deptId=event.target.value;
        setDepartment((prevState)=>{
         return {...prevState,department:event.target.value}
        })
    }
    const deptNameChangeHandler=(event)=>{
        // employee.salary=event.target.value;
        department.deptName=event.target.value;
        console.log(event.target.value)
         setDepartment((prevState)=>{
          return {...prevState,department:event.target.value}
         })
     }
    
const validate=()=>{
    let isError=false;
   if( department.deptId=="" ||  department.deptId==undefined){
        console.log("username req")
        setErrorDeptId((prev)=> "plz enter deptid");
        isError=true;
    }
    if( department.deptName=="" ||  department.deptName==undefined){
        console.log("username req")
        setErrorDeptName((prev)=> "plz enter department name");
        isError=true;
    }
    return isError;
} 
const submitHandler=(event)=>{
    event.preventDefault();  
    let x=validate();
    console.log(x)
    if(x==false)
    setAddDept(()=> true);
      else
    setAddDept(()=> false);
  }
    React.useEffect(() => {
        console.log("useEfect ...")

       api.getAllDepts().then((response) => {
          //  setDepartments(response.data);
          dispatch(getAllDepartments());
           console.log(response.data)
        });
        if(addDept===true){              
            axios.post(`${baseURL}`,{deptId:department.deptId, deptName:department.deptName}).then( (response)=>{
                console.log(response.status)
                console.log("updated");
                setAddDept(()=> false);              
            })
        }     
    }
      , [addDept]);
    
return(
        <div>
            <div  className="newEmpFormGroup">
     <img id="newDeptImg"
      src="images/department.jpg"></img></div>
         <div id="form"  className="newDeptFormGroup">

    <form onSubmit={submitHandler}>
   
    <input type="text" placeholder='Enter DeptId'  className="form-control" value={department.deptId}  onChange={deptIdChangeHandler}/>
    <span className="invalid-feedback d-block" role="alert">{errorDeptId}</span>

    <input type="text" placeholder='Enter DeptName'  className="form-control" value={department.deptName} onChange={deptNameChangeHandler}/>
    <span className="invalid-feedback d-block" role="alert">{errorDeptName}</span>

    <button  type="submit" className="btn btn-success">Add Department</button>

</form>
</div>
<br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br>
<br></br><br></br>
<div id="allDepts" >
   <table className='table table-striped'>
   <thead>
        <tr scope="col" className='tableHeading bg-primary'>
        <th>DeptId</th>
        <th>Department Name</th>
        </tr>
        </thead>
        <tbody>
        {
            departments.map(d=> <tr><td>{d.deptId}</td> <td>{d.deptName}</td></tr>)
        }
        </tbody>
    </table>
    </div>
        </div>
    );
}
export default DepartmentList;