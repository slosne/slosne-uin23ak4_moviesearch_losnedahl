import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchForm({ setSearch, getMovies }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //If user enters 3 or more chars, pass value to search state and render movies.
  const handleSearch = (e) => {
    const value = e.target.value;
    if (value.length >= 3) {
      setSearch(value);
      getMovies();
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label htmlFor="title">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ fontSize: "1.3rem" }}
        />
      </label>
      <input
        type="search"
        name="title"
        placeholder="Search.."
        onChange={handleSearch}
      />
    </form>
  );
}
