import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";
import DepartmentList from './DepartmentList';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';
import NewEmployeeForm from './NewEmployeeForm';

const Menu = () => {
    return(
       <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/employees">Employees</a>
        </li>
        <li className="nav-item">
         
            <a className="nav-link" href="/addEmp">New Employee</a>
           
        </li>
         <li className="nav-item">
         <a className="nav-link" href="departments">Departments</a>
       
        </li>
    </ul>
    </div>
  </nav>
        
         <BrowserRouter>
             <Routes>
            <Route exact path="/departments" element= {<DepartmentList/>} />
            <Route path = "/employees" element = {<EmployeeList/>} />
            <Route path = "/empForm/:id" element = {<EmployeeForm/>} />
            <Route path = "/addEmp" element = {<NewEmployeeForm/>} />

            </Routes>
            
        </BrowserRouter>
   
       </div>
    );
};
export default Menu;