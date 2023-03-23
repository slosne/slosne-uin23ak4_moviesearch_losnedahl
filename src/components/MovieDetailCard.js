import React from "react";

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
}) {
  return (
    <article>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <h5>Released: {year}</h5>
      <p>Genre: {genre}</p>
      <p>Main actors: {actors}</p>
      <p>Plot: {plot}</p>
      <p>Origin: {language}</p>
      <p>Awards: {awards}</p>
      <p>
        imdb rating: {rating}/10 out of {votes} votes
      </p>
    </article>
  );
}
