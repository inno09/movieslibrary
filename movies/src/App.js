import React, { useState,useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Discover from './components/Discover';
import Favorites from './components/Favorites';
import Popular from './components/Popular.js';
import SearchBar from './components/SearchBar.js';
import MovieContainer from './components/MovieContainer.js';

const movieAPI = "http://localhost:3000/movies";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [movies, setMovies] = useState([]);
  const [favoriteVisible, setFavoriteVisible] = useState(true);
  const moviesToDisplay = movies.filter((movie) => favoriteVisible || movie.isFavorite);
    // Update state by passing the array of items to setPoems
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
    


  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  
  return (
    <div className="App">
      <NavBar isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick}/>
      <div>
        {/* <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} /> */}
      </div>
      <div className="sidebar">
        <button onClick={() => setFavoriteVisible(!favoriteVisible)} >Show/hide Favorite Movies</button>
      </div>
      {renderMovieView()}
      <Switch>
        <Route exact path="/Favorites">
          <Favorites />
        </Route>
        <Route exact path="/discover">
          <Discover />
        </Route>
        <Route exact path="/popular">
          <Popular />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      
    </div>
    
  );
}

export default App;