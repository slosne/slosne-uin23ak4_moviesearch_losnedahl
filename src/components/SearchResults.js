import React from "react";
import MovieCard from "./MovieCard";
import SearchForm from "./SearchForm";

export default function SearchResults({
  movies,
  setSearch,
  getMovies,
  details,
}) {
  //Some movies have no Poster url at all. If so, I chose to not display whole object for better design.
  const filteredItems = movies?.filter(
    (item) => item?.Poster !== "N/A" && typeof item?.Poster !== "undefined"
  );

  return (
    <>
      <SearchForm setSearch={setSearch} getMovies={getMovies} movies={movies} />
      <h2>Results:</h2>
      <div className="article-container">
        {filteredItems?.map((movie, index) => (
          <MovieCard
            key={index}
            image={movie?.Poster}
            title={movie?.Title}
            year={movie?.Year}
            awards={details[index]?.Awards}
            genre={details[index]?.Genre}
            director={details[index]?.Director}
            cast={details[index]?.Actors}
            movie={movie}
          />
        ))}
      </div>
    </>
  );
}
