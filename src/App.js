import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import EmployeeProfilePage from "./pages/EmployeeProfilePage/EmployeeProfilePage";
import employeeData from './database/employeeData'

function App() {
  // const [emp, setEmp] = useState(emp)

  return (
    <div className="App">
      <div className="pagesContainer">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/employeeProfile/:symbol" element={<EmployeeProfilePage empData={employeeData}/>} />

        </Routes>
        {/* <EmployeeProfilePage /> */}
        </div>
    </div>
  );
}

export default App;
