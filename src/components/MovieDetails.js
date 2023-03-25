import { useParams } from "react-router-dom";
import MovieDetailCard from "./MovieDetailCard";

export default function MovieDetails({ movies, details }) {
  const { slug } = useParams();
  const movie = movies?.find(
    (m) => m?.imdbID.replace(/\s/g, "-").toLowerCase() === slug
  );
  const detail = details?.find((d) => d.imdbID === movie?.imdbID);

  return (
    <section>
      <MovieDetailCard
        image={detail?.Poster}
        title={detail?.Title}
        year={detail?.Year}
        genre={detail?.Genre}
        actors={detail?.Actors}
        plot={detail?.Plot}
        language={detail?.Language}
        awards={detail?.Awards}
        rating={detail?.imdbRating}
        votes={detail?.imdbVotes}
        runtime={detail?.Runtime}
        director={detail?.Director}
        writers={detail?.Writer}
      />
    </section>
  );
}
