import React from "react";
import Movies from "./Movies";


function MoviesContainer({movies, removeMovie, addToFavorites}) {
  return (
   <div className="cardContainer" >
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


