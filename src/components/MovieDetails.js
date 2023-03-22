import { useParams } from "react-router-dom";

export default function MovieDetails({ movies }) {
  const { slug } = useParams();
  const movie = movies?.find(
    (m) => m?.imdbID.replace(/\s/g, "-").toLowerCase() === slug
  );

  return (
    <section>
      <h1>{movie?.Title}</h1>
      <img src={movie?.Poster} alt={movie?.Title} />
    </section>
  );
}
