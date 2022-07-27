import React, { useState,useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Discover from './components/Discover';
import Favorites from './components/Favorites';
import Popular from './components/Popular.js';
import SearchBar from './components/SearchBar.js';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchValue, setSearchValue] = useState('')
  const [movies, setMovies] = useState([])

  const getMovieRequest = async (resp) => {
    const url = `https://imdb-api.com/en/API/SearchMovie/k_12345678/${searchValue}`
    const response = await fetch(url)
    const responseJSON = await response.json()

    if (responseJSON.Search) {
        setMovies(responseJSON.Search)
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue])

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  
  return (
    <div className="App">
      <NavBar isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick}/>
      <div>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
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