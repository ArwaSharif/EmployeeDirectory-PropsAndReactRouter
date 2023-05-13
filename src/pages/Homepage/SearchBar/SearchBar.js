import "./searchBar.css";

export default function SearchBar() {
  return (
    <div className="searchBar">
      <input
        className="searchInput"
        type="text"
        placeholder="Search.."
        name="search"
      />
    </div>
  );
}
