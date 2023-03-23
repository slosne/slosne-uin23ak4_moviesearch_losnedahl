import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetailCard from "./MovieDetailCard";

export default function MovieDetails({ movies }) {
  const { slug } = useParams();
  const movie = movies?.find(
    (m) => m?.imdbID.replace(/\s/g, "-").toLowerCase() === slug
  );

  const [details, setDetails] = useState([]);

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
  }, [movie]);

  if (details.Poster === "N/A" || details.Poster === undefined) {
    return null;
  }

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
      />
    </section>
  );
}
