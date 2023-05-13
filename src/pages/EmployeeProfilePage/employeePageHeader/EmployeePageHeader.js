import { Link } from "react-router-dom";
import "./employeePageHeader.css";

export default function EmployeePageHeader() {
  const arrow = "<";
  return (
    <div className="empPageHeader">
      <span>
        <Link to="/" className="empPageHead">
          <h2>
            {" "}
            <span style={{ float: "left", paddingLeft: "3%" }}>
              {arrow}
            </span>{" "}
            Back to Employee Directory
          </h2>
          <br />
        </Link>
      </span>
    </div>
  );
}
