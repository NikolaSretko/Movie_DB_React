import React, { useState } from "react";

const Nav = ({ filterByDateAsc, filterByDateDesc, filterByBestRate, filterByAZ, filterByZA, searchFunction }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);
    searchFunction(searchTerm);
  };

  return (
    <nav >
      <div className="sortFunk">
        <button onClick={filterByDateAsc}>Sort by Date Ascending</button>
        <button onClick={filterByDateDesc}>Sort by Date Descending</button>
        <button onClick={filterByBestRate}>Best Rate</button>
        <button onClick={filterByAZ}>A-Z</button>
        <button onClick={filterByZA}>Z-A</button>
        <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search..."
            />
      </div>
    </nav>
  );
};

export default Nav;
