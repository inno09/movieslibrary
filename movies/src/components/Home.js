import React, { useState,useEffect } from "react";
import MovieContainer from './MovieContainer.js';

const movieAPI = "http://localhost:3000/movies";
function Home() {

  const [movies, setMovies] = useState([]);
  const [favoriteVisible, setFavoriteVisible] = useState(true);
  const moviesToDisplay = movies.filter((movie) => favoriteVisible || movie.isFavorite);
    useEffect(() => {
      fetch(movieAPI)
        .then(response => response.json())
        .then(data => setMovies(data))
    }, []);

  function renderMovieView() {
    if (moviesToDisplay.length === 0 && !favoriteVisible) {
      return (<h1>You have no favorites added</h1>)
    } else {
      return (
        <MovieContainer movies={moviesToDisplay} 
        removeMovie={removeMovie} addToFavorites={addToFavorites}/>
      )
    }
  }

  function addToFavorites(favMovie) {
    setMovies(movies.map(movie => {
      return movie.id === favMovie.id ? {...favMovie, isFavorite: !favMovie.isFavorite} : movie
      }  
    ))
  }

  
  function removeMovie(movieToRemove) {
    setMovies(movies.filter(movie => movie.id !== movieToRemove.id))
  }

  return (
    <div>
      {renderMovieView()}
    </div>
  )
}

export default Home;
