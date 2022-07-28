import React, { useState,useEffect } from "react";
// import MoviesContainer from "./MovieContainer";

const movieAPI = "http://localhost:3000/movies";

function Random() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(movieAPI)
      .then(response => response.json())
      .then(data => setMovies(data))
  }, []);

  // function getRandomMovie(arr) {
  //   const randomIndex = Math.floor(Math.random() * arr.length)

  //   console.log(randomIndex);

  //   return movies[randomIndex];
  // }


  let getRandomMovie = movies[Math.floor(Math.random() * movies.length)];

  // function movieToDisplay() {
  //   return (
  //     <MoviesContainer getRandomMovie={movies}/>
  //   )
  // }

  // let randomMovie= getRandomMovie.map((item)=>{
  //   console.log(randomMovie)
  //   return(
  //     <div>
  //       <h3>{item.fullTitle}</h3>
  //       <p>{item.releaseState}</p>
  //       <img src={item.image} className="card-img-top" style={{height: '100%'}} alt={item.fullTitle} />
  //       <div className="card-content"></div>
  //     </div>
  //   )
  // })


  return (
    <div>
    <div> 
      <button onClick={() =>getRandomMovie} >Show Random Movie</button>
    </div>
    {/* {randomMovie} */}
    </div>
  );
}

export default Random;