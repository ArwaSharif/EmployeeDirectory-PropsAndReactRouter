import './homepage.css'
import Header from "./Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import EmployeeList from "./EmployeeList/EmployeeList";


export default function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}
