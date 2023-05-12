import "./employeeListItem.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
// import Pic1 from "./profileImgs/canary.webp";
// import Pic2 from "./profileImgs/Cat.jpg";
// import Pic3 from "./profileImgs/FinnJake.webp";
// import Pic4 from "./profileImgs/Gon.jpg";
// import Pic5 from "./profileImgs/bubblegum-marceline.png";
// import Pic6 from "./profileImgs/Kilua.jfif";
import employeeData from "../../../../database/employeeData";


export default function EmployeeListItem(props) {
  const emp = employeeData
  // console.log(emp);

      // const params = useParams();

      // console.log('this is params', params)
      // const urlKey = params.urlKey;
      // // console.log(first)
      // const currentEmp = emp.find((empObj, i) => {
      //     return urlKey === empObj
      // })
      // console.log("this is currentEmp symbol", currentEmp);
  return (
    <div>
        {emp.map((empObj, symbol) => {
          // console.log('symbl' , symbol)
          return(
            <Link to={`/employeeProfile/${empObj.name}`} >
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
          )})}
    </div>
  );
}

// <div className="employeeItem">
//   <div className="imgDiv">
//     <img src={Pic2} alt="pic1" />
//   </div>
//   <div className="employeeNameTitle">
//     <h2>Julie Taylor</h2>
//     <p>VP of Marketing</p>
//   </div>
// </div>
// <div className="employeeItem">
//   <div className="imgDiv">
//     <img src={Pic3} alt="pic1" />
//   </div>
//   <div className="employeeNameTitle">
//     <h2>Eugene Lee</h2>
//     <p>CFO</p>
//   </div>
// </div>
// <div className="employeeItem">
//   <div className="imgDiv">
//     <img src={Pic4} alt="pic1" />
//   </div>
//   <div className="employeeNameTitle">
//     <h2>John Williams</h2>
//     <p>VP of Engineering</p>
//   </div>
// </div>
// <div className="employeeItem">
//   <div className="imgDiv">
//     <img src={Pic5} alt="pic1" />
//   </div>
//   <div className="employeeNameTitle">
//     <h2>Ray Moore</h2>
//     <p>VP of Sales</p>
//   </div>
// </div>
// <div className="employeeItem">
//   <div className="imgDiv">
//     <img src={Pic6} alt="pic1" />
//   </div>
//   <div className="employeeNameTitle">
//     <h2>Paul Jones</h2>
//     <p>QA Manager</p>
//   </div>
//   </div>
