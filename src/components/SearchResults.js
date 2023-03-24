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
      <h2>Results:</h2>
      <div className="article-container">
        {movies?.map((movie, index) => (
          <article className="movie-card" key={index}>
            <MovieCard
              key={index}
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
          </article>
        ))}
      </div>
    </>
  );
}
