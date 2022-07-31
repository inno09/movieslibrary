import React, { useState } from 'react';

const movieAPI = "https://hidden-earth-55593.herokuapp.com/";

function Movies({movie, removeMovie, addToFavorites}) {
  const {fullTitle, releaseState, image} = movie;
  const [isWatched, setIsWatched] = useState(false)
  function onDeleteClick(e) {
    e.preventDefault();
    fetch(`${movieAPI}/${movie.id}`, {
      method: "DELETE",
    });
    removeMovie(movie);
  }

  return (
    <div class="card">
      <div >
        <h3>{fullTitle}</h3>
        <p>{releaseState}</p>
        <img src={image} className="card-img-top" style={{height: '100%'}} alt={fullTitle} />
        <div className="card-content">
          <button onClick={() => setIsWatched(!isWatched)} > {isWatched ? "Watched" : "Watch Later" }</button>
          <button onClick={onDeleteClick} > Delete</button>
          <button onClick={() => addToFavorites(movie)}> {movie.isFavorite ? "Unfavorite" : "⭐" }</button>
        </div>
      </div>
    </div>
  );
}

export default Movies;