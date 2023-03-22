import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchForm({ setSearch, getMovies, movies }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
        <FontAwesomeIcon icon={faMagnifyingGlass} />
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
