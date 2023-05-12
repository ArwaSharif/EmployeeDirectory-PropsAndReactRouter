import './employeeProfilePage.css'
import { useParams } from 'react-router-dom'
import EmployeePageHeader from './employeePageHeader/EmployeePageHeader'

export default function EmployeeProfilePage (props){
    // const params = useParams();
    const empObj = props.empData

    // console.log('emp data in profile', empObj)
    const params = useParams();
    // console.log('this is params', params)

    const urlSymbol = params.symbol;
    //   console.log(urlSymbol, 'in urlsym')

    const currentEmp = props.empData.find((emp) => {
        // console.log('empppp', emp)
          return urlSymbol === emp.name
    })
      console.log("this is currentEmp symbol", currentEmp);
    return(
        <div className="empProfilePage">
            <div>
            <EmployeePageHeader />
            </div>
            <div className='empProfile'>
               {empObj ?
                (<div style={{backgroundColor: 'lightgray', width: '100%', height: '100%'}}>
                  <h1>-</h1>  
                </div>)
                :
                <h2>{currentEmp.name}</h2>
               }
            </div>

        </div>
    )
}