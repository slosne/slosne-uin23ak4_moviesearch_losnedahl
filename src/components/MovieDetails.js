import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetailCard from "./MovieDetailCard";

export default function MovieDetails({ movies }) {
  const { slug } = useParams();
  const movie = movies?.find(
    (m) => m?.imdbID.replace(/\s/g, "-").toLowerCase() === slug
  );

  const [details, setDetails] = useState([]);

  //Fetch details to use upon "read more" on each movie
  const getDetailedMovies = async () => {
    if (movie) {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=3bc426b0&i=${movie.imdbID}`
      );
      const data = await response.json();
      setDetails(data);
    }
  };

  useEffect(() => {
    const fetchDetails = async () => {
      await getDetailedMovies();
    };
    fetchDetails();
    // eslint-disable-next-line
  }, [movie]);

  return (
    <section>
      <MovieDetailCard
        image={details?.Poster}
        title={details?.Title}
        year={details?.Year}
        genre={details?.Genre}
        actors={details?.Actors}
        plot={details?.Plot}
        language={details?.Language}
        awards={details?.Awards}
        rating={details?.imdbRating}
        votes={details?.imdbVotes}
        runtime={details?.Runtime}
        director={details?.Director}
        writers={details?.Writer}
      />
    </section>
  );
}
