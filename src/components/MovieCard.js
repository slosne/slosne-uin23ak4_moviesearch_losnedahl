import React from "react";

export default function MovieCard({
  title,
  image,
  year,
  awards,
  genre,
  director,
  cast,
}) {
  return (
    <article className="movie-card">
      <img src={image} alt={title} />
      <div className="card-text">
        <h4>
          {title} ({year})
        </h4>
        <p>Directed by {director}</p>
        <p>Featuring {cast}</p>
        <p>Genre: {genre}</p>
        <p>Awards: {awards}</p>
      </div>
    </article>
  );
}
