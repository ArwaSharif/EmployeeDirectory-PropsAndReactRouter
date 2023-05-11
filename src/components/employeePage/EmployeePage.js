import '../pages.css'
import EmployeePageHeader from './employeePageHeader/EmployeePageHeader'

export default function EmployeePage (){
    return(
        <div className="empProfilePage">
            <div>
            <EmployeePageHeader />
            </div>
            <div className='empProfile'>
                Employee Profile Here
            </div>

        </div>
    )
}