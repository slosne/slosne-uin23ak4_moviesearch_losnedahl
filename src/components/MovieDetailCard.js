import React from "react";
import { Link } from "react-router-dom";

export default function MovieDetailCard({
  image,
  title,
  year,
  genre,
  actors,
  plot,
  language,
  awards,
  votes,
  rating,
  runtime,
  director,
  writers,
}) {
  return (
    <article>
      <h2>
        {title} ({year})
      </h2>
      <div className="detail-flex-container">
        <img src={image} alt={title} />
        <div className="detail-text-container">
          <h3>General info</h3>
          <p>Genre: {genre}</p>
          <p>Directed by: {director}</p>
          <p>Written by: {writers}</p>
          <p>Main cast: {actors}</p>
          <p>Original language: {language}</p>
          <p>Awards: {awards}</p>
          <p>Runtime: {runtime}</p>
        </div>
      </div>
      <h3>Plot</h3>
      <p>{plot}</p>
      <h3>Ratings</h3>
      <p>Imdb rating: {rating}/10</p>
      <p>{votes} ratings</p>
      <Link to="/">
        <button>Back</button>
      </Link>
    </article>
  );
}
