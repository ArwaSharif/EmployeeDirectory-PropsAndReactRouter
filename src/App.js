import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import EmployeeProfilePage from "./pages/EmployeeProfilePage/EmployeeProfilePage";
import employeeData from "./database/employeeData";

function App() {
  return (
    <div className="App">
      <div className="pagesContainer">
        <Homepage />
        <Routes>
          {/* <>
          DIDN'T WORK, SHOWS TWO SEPARATE PAGES
          <Route path="/" element={ <Homepage /> } />
          </> */}
          <Route
            path="/:symbol"
            element={<EmployeeProfilePage empData={employeeData} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
