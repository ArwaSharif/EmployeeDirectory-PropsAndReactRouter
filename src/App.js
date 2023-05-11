import "./App.css";
import './components/pages.css'
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import EmployeePage from "./components/employeePage/EmployeePage";

function App() {
  return (
    <div className="App">
      <div className="pagesContainer">
        <Homepage />
        <EmployeePage />
        </div>
    </div>
  );
}

export default App;
