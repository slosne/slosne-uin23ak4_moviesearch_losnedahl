import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({
  title,
  image,
  year,
  awards,
  genre,
  director,
  cast,
  movie,
}) {
  return (
    <article className="movie-card">
      <img src={image} alt={title} />
      <div className="card-text">
        <h4>{title}</h4>
        <h5>({year})</h5>
        <p>Directed by {director}</p>
        <p>{cast}</p>
        <p>{genre}</p>
        <p>Awards: {awards}</p>
        <Link to={movie?.imdbID.replace(/\s/g, "-").toLowerCase()}>
          <button className="basic-button">Read more</button>
        </Link>
      </div>
    </article>
  );
}
