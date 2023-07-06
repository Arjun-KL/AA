import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeForm from "./EmployeeForm";
import Departments from "./DepartmentList";

const Menu=()=>{
    return <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-x`">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="departments">Deparments</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Employees</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Add New Employee</a>
      </li>
    </ul>
  </div>

</nav>
<BrowserRouter>
       <Routes>
          <Route path="/addEmp/:id" element={<EmployeeForm/>}></Route>
          <Route path="/departments" element={<Departments/>}></Route>
       </Routes>
</BrowserRouter>
    </div>
}

export default Menu;