import { render } from "@testing-library/react";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {deleteById}  from "../redux/EmpAction";
import './Employee.css'
import ApiService from "./services/ApiService";
const Employee=(props)=>{
   let imagePath=`./images/gender/${props.gender}.png`;
   const baseURL = "http://localhost:9999/employees/";
   const navigate = useNavigate();

   const [deleteEmp, setDeleteEmp] = React.useState(false);
   const [removeSelectedId, setRemoveSelectedId] = React.useState([0]);
const api= new ApiService();
const dispatch=useDispatch();

   React.useEffect(() => {
    console.log("useEfect ...")
    if(deleteEmp){
        console.log("deleting ...")
         api.deleteEmp(removeSelectedId)  .then( (response)=>{
               console.log("updated");
               setDeleteEmp(false)
               dispatch(deleteById(removeSelectedId))
               navigate("../employees");});
               window.location.reload();
            }
   })
const delEmp=()=>{
   // props.deleteEmp(props.id);
   let delConfirm=window.confirm("do u want to delete "+props.id);
   if(delConfirm){
        setDeleteEmp(true);
        setRemoveSelectedId(props.id)
   }

}
return ( 
      <div  className="col-md-4 col-lg-3 card">
    <div className="card-header">      
        {props.name}
        </div>
        <div className="card-body">
      Employee Id  {props.id} 
      <a className="bi bi-trash-fill pull-right" onClick={delEmp}></a>
      <br></br>
      <img className="img pull-left" src={imagePath} alt="not found" />
         <br></br>
         Salary  {props.salary}
             <Link to={`/empForm/${props.id}`}><i class="bi bi-pen"></i></Link>
             <br></br>
             <input type="text" value="admin" readOnly></input>
             {props.dept}
      </div>
       </div>
  );
}
export default Employee;