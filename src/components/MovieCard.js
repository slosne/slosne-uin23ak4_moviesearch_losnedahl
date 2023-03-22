import React from "react";

export default function MovieCard({ title, image, year }) {
  return (
    <article className="movie-card">
      <img src={image} alt={title} />
      <div className="card-text">
        <h4>{title}</h4>
        <h5>Released: {year}</h5>
      </div>
    </article>
  );
}
