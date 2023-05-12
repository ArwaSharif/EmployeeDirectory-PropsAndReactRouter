import { Link } from "react-router-dom"

export default function EmployeePageHeader (){
    return(
        <div className="empPageHeader">
        <div className="btnDiv">
            <button>
                <Link to="/"> <img className="arrowImg" src="./arrow-img.png" alt="arrow pointing to the left" /> </Link>
            </button>
        </div>
        <h1 className="empPageHead">Employee</h1>
        </div>
    )
}