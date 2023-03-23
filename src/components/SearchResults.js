import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import SearchForm from "./SearchForm";

export default function SearchResults({ movies, setSearch, getMovies }) {
  return (
    <>
      <SearchForm setSearch={setSearch} getMovies={getMovies} movies={movies} />
      <article className="movie-card">
        <h2>Results:</h2>
        {movies?.map((movie, index) => (
          <div key={index}>
            <MovieCard
              image={movie?.Poster}
              title={movie?.Title}
              year={movie?.Year}
            />
            <Link to={movie?.imdbID.replace(/\s/g, "-").toLowerCase()}>
              Read more
            </Link>
          </div>
        ))}
      </article>
    </>
  );
}
