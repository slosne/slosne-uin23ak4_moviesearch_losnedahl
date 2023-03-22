import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchForm({ setSearch, getMovies }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
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
      <button type="submit" onClick={getMovies}>
        Search
      </button>
    </form>
  );
}
