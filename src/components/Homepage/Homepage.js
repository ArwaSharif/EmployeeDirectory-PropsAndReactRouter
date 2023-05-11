// import '../pages.css'
import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";


export default function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}
