import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Random from './components/Random';
import Discover from './components/Discover';
// import SearchBar from './components/SearchBar.js';
// import MovieContainer from './components/MovieContainer.js';

// const movieAPI = "http://localhost:3000/movies";

function App() {
  // const [movies, setMovies] = useState([]);
  // const [favoriteVisible, setFavoriteVisible] = useState(true);
  // const moviesToDisplay = movies.filter((movie) => favoriteVisible || movie.isFavorite);
  //   // Update state by passing the array of items to setPoems
  //   useEffect(() => {
  //     fetch(movieAPI)
  //       .then(response => response.json())
  //       .then(data => setMovies(data))
  //   }, []);

  
  //   function renderMovieView() {
  //     if (moviesToDisplay.length === 0 && !favoriteVisible) {
  //       return (<h1>You have no favorites added</h1>)
  //     } else {
  //       return (
  //         <MovieContainer movies={moviesToDisplay} 
  //         removeMovie={removeMovie} addToFavorites={addToFavorites}/>
  //       )
  //     }
  //   }



   
    // function addToFavorites(favMovie) {
    //   setMovies(movies.map(movie => {
    //     return movie.id === favMovie.id ? {...favMovie, isFavorite: !favMovie.isFavorite} : movie
    //     }  
    //   ))
    // }

    
  //   function removeMovie(movieToRemove) {
  //     setMovies(movies.filter(movie => movie.id !== movieToRemove.id))
  //   }
    
  
  return (
    <div className="App">
      <NavBar/>
      <div>
        {/* <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} /> */}
      </div>
      {/* <div className="sidebar">
        <button onClick={() => setFavoriteVisible(!favoriteVisible)} >Show/hide Favorite Movies</button>
      </div> */}
      {/* {renderMovieView()} */}
      <Switch>
        <Route exact path="/discover">
          <Discover />
        </Route>
        <Route exact path="/random">
          <Random />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      
    </div>
    
  );
}

export default App;