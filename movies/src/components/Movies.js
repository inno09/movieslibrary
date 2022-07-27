import React, { useState } from 'react';

const movieAPI = "https://imdb-api.com/en/API/MostPopularMovies/k_498nqc8v";

function Movies({movie, removeMovie, addToFavorites}) {
  const {title, year, image} = movie;
  const [isWatched, setIsWatched] = useState(false)
  // sends a request to delete the poem from the database
  function onDeleteClick(e) {
    e.preventDefault();
    fetch(`${movieAPI}/${movie.id}`, {
      method: "DELETE",
    });
    removeMovie(movie);
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p><strong>- By {author}</strong></p>
      <button onClick={() => setIsWatched(!isWatched)} > Mark as {isWatched ? "watched" : "unwatched" }</button>
      <button onClick={onDeleteClick} > Delete</button>
      <button onClick={() => addToFavorites(movie)}> {movie.isFavorite ? "Unfavorite" : "⭐Favorite" }</button>
    </div>
  );
}

export default Movies;