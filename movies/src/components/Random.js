import React, { useState,useEffect } from "react";

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


  return (
    <div> 
      <button onClick={getRandomMovie} >Show Random Movie</button>
    </div>
  );
}

export default Random;