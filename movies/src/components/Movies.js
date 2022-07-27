import React, { useState } from 'react';

const movieAPI = "http://localhost:3000/movies";

function Movies({movie, removeMovie, addToFavorites}) {
  const {fullTitle, releaseState, image} = movie;
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
    <div class="card">
      <div style={{ width: '18rem' }}>
        <h3>{fullTitle}</h3>
        <p>{releaseState}</p>
        <img src={image} className="card-img-top" alt={fullTitle} />
        <button onClick={() => setIsWatched(!isWatched)} > Mark as {isWatched ? "watched" : "unwatched" }</button>
        <button onClick={onDeleteClick} > Delete</button>
        <button onClick={() => addToFavorites(movie)}> {movie.isFavorite ? "Unfavorite" : "⭐Favorite" }</button>
      </div>
    </div>
  );
}

export default Movies;