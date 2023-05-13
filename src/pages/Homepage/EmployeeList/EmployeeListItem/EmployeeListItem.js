import "./employeeListItem.css";
import { Link } from "react-router-dom";
import employeeData from "../../../../database/employeeData";

export default function EmployeeListItem(props) {
  const emp = employeeData;
  return (
    <div className="itemsMap">
      {emp.map((empObj, symbol) => {
        // console.log('symbl' , symbol)
        return (
          <Link to={`/${empObj.name}`}>
            <div className="empItems" key={symbol}>
              <div className="imgDiv">
                <img src={empObj.img} alt={`profile pic ${symbol}`} />
              </div>
              <div className="employeeNameTitle">
                <h2>{empObj.name}</h2>
                <p> {empObj.title}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
