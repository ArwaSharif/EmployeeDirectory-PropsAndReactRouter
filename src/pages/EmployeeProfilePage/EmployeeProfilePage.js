import "./employeeProfilePage.css";
import { useParams } from "react-router-dom";
import EmployeePageHeader from "./employeePageHeader/EmployeePageHeader";

export default function EmployeeProfilePage(props) {
  // const params = useParams();
  const empObj = props.empData;

  // console.log('emp data in profile', empObj)
  const params = useParams();
  console.log("this is params", params);

  const urlSymbol = params.symbol;

  const currentEmp = empObj.find((emp) => {
    return urlSymbol === emp.name;
  });
  console.log("this is currentEmp symbol", currentEmp);

  return (
    <div className="empProfilePage">
      <div>
        <EmployeePageHeader />
      </div>
      <div className="empProfile">
        <div className="profileItem">
          <div className="profileImg">
            <img
              src={currentEmp.img}
              alt={`profile pic ${currentEmp.symbol}`}
            />
          </div>
          <div className="profileName">
            <h2>{currentEmp.name}</h2>
            <p> {currentEmp.title}</p>
          </div>
        </div>
        <hr />
        <div className="profileDivs">
          <h2>Call Office</h2>
          <p>{currentEmp.CallOffice}</p>
        </div>
        <hr />
        {/* <br/> */}
        <div className="profileDivs">
          <h2>Call Mobile</h2>
          <p>{currentEmp.CallMobile}</p>
        </div>
        <hr />
        {/* <br/> */}
        <div className="profileDivs">
          <h2>SMS</h2>
          <p>{currentEmp.SMS}</p>
        </div>
        <hr />
        <div className="profileDivs">
          <h2>Email</h2>
          <p>{currentEmp.Email}</p>
        </div>
      </div>
    </div>
  );
}
