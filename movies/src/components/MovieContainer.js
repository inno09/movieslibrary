import React from "react";
import Movies from './components/Movies';

function MoviesContainer({movies, removeMovie, addToFavorites}) {
  return (
    <div className="movies-container">
      {/* render a list of <Poem> components in here */}
      {movies.map(movie => {
        return (
          <Movies 
            key={movie.id} 
            movie={movie} 
            removeMovie={removeMovie} 
            addToFavorites={addToFavorites} 
          />
        )
        })}
    </div>
  );
}

export default MoviesContainer;
