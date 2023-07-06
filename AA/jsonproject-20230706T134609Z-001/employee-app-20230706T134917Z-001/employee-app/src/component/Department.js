import { Link } from "react-router-dom";

const Department=(props)=>{

    return <div>
        <div class="card col col-md-4 deptCard" >
 <div class="card-header">
 {props.deptId}
 </div>
  <div class="card-body">
    <h5 class="card-title">{props.deptName}</h5>
    <p class="card-text"></p>
   
   <Link to={`/addEmp/${props.deptId}`} class="btn btn-primary">Add Employee</Link>
  </div>
</div>
     
        <h2></h2>
        <h3></h3>
    </div>
}

export default Department