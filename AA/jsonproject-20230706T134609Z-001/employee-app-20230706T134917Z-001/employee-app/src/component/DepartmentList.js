import { useEffect, useState } from "react";
import ApiService from "../services/ApiService";
import Department from "./Department";

const Departments = ()=>{
    //local variable
  // const departments=[{"deptId":10001,"deptName":"IT"},{"deptId":10002,"deptName":"Marketting"},{"deptId":10003,"deptName":"HR"},{"deptId":10004,"deptName":"Operations"},{"deptId":10005,"deptName":"new team"},{"deptId":10006,"deptName":"Business Development"}];
   
  //useState returns tuple , it has data and setter function
  //useState --> creates state of a UI component
  const [departments,setDepartments]=useState([{"deptId":10001,"deptName":"IT"}]);
  const api= new ApiService();
  //then is the function of promise
  /* api.getAllDepts().then( (res)=>{console.log(res.data);
    setDepartments(res.data)
} )*/
useEffect( ()=>{
    api.getAllDepts().then( (res)=>{console.log(res.data);
        setDepartments(res.data)
    } )
},[] );
    return <div className="container">
        Departments will display here
        {
            departments.map(d => <Department deptId={d.deptId} deptName={d.deptName} />)
        }
    </div>
}

export default Departments;