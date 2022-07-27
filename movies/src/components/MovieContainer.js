import React from "react";
import Movies from "./Movies";


function MoviesContainer({movies, removeMovie, addToFavorites}) {
  return (
    <div className="card" >
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


{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div> */}