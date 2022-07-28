import React, { useState,useEffect } from "react";
// import { useHistory } from "react-router-dom";

import MovieContainer from './MovieContainer.js';

const movieAPI = "http://localhost:3000/movies";
function Home() {

  const [movies, setMovies] = useState([]);
  const [favoriteVisible, setFavoriteVisible] = useState(true);
  // const [watchLaterVisible, setWatchLater] = useState(true);
  const moviesToDisplay = movies.filter((movie) => favoriteVisible || movie.isFavorite);
  // const history = useHistory();

  
  
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

  function addToFavorites(favMovie)  {
    setMovies(movies.map(movie => {
      return movie.id === favMovie.id ? {...favMovie, isFavorite: !favMovie.isFavorite} : movie
      }  
    ))
  }

  function addMovie(newMovie) {
    setMovies([...movies, newMovie]);
  }

  

  
  function removeMovie(movieToRemove) {
    setMovies(movies.filter(movie => movie.id !== movieToRemove.id))
  }
    


  return (
    <div>
       <div className="sidebar">
       <button 
          onClick={() => setFormVisible(!formVisible)} >
          Show/hide new Movie form
        </button>
        {formVisible ? <NewMovieForm addMovie={addMovie} /> : null} 
        <button onClick={() => setFavoriteVisible(!favoriteVisible)} >Show/hide Favorite Movies</button>
        {/* <button onClick={() => setWatchLater(!watchLaterVisible)} >Watch Later</button> */}
      </div> 
      {/* {renderMovieView()} */}
      {renderMovieView()}
    </div>
  )
}

export default Home;

// import { useHistory } from 'react-router-dom';

// const App = () => {
//   const history = useHistory();

//   const redirect = () => {
//     history.push('/login');
//   }

//   return (
//     <div>
//       <h1>Hi there!</h1>
//       <button onClick={redirect}>Log in</button>
//     </div>
//   );
// };