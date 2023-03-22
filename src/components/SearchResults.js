import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import SearchForm from "./SearchForm";

export default function SearchResults({ movies, setSearch, getMovies }) {
  return (
    <>
      <SearchForm setSearch={setSearch} getMovies={getMovies} />
      <article className="movie-card">
        <h2>Results:</h2>
        {movies.map((movie, index) => (
          <Link key={index} to={movie.imdbID.replace(/\s/g, "-").toLowerCase()}>
            <MovieCard
              image={movie.Poster}
              title={movie.Title}
              year={movie.Year}
            />
          </Link>
        ))}
      </article>
    </>
  );
}
