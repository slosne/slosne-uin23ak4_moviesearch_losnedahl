import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import SearchForm from "./SearchForm";

export default function SearchResults({
  movies,
  setSearch,
  getMovies,
  details,
}) {
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
              awards={details[index]?.Awards}
              genre={details[index]?.Genre}
              director={details[index]?.Director}
              cast={details[index]?.Actors}
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
