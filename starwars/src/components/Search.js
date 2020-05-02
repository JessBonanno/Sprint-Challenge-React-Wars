import React, { useState } from "react";

export default function Search({ characters }) {
  console.log(characters);

  const [search, setSearch] = useState("");
  const [match, setMatch] = useState([]);

  const handleChanges = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const filterByValue = (array, search) => {
    return array.filter((o) => {
      Object.keys(o).some((k) => {
        if (o[k] === search) {
            console.log(o);
            
          return o;
        }
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(filterByValue(characters, search));
  };
//   console.log(match);
  
  return (
    <div className="search-container">
      <h2>Filter characters by physical attribute</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search"
          value={search}
          onChange={handleChanges}
        ></input>
        <button>Filter</button>
      </form>
    </div>
  );
}
