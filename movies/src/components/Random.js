import React, { useState,useEffect } from "react";
// import MovieContainer from "./MovieContainer";

const movieAPI = "http://localhost:3000/movies";

function Random({movie}) {
  const [movies, setMovies] = useState([]);
//   const {fullTitle, image} = movie;
  
//   // const [fullTitle, setFullTitle] = useState("");
//   // const [image, setImage] = useState("");
  useEffect(() => {
    fetch(movieAPI)
      .then(response => response.json())
      .then(data => setMovies(data))
  }, []);

  const getRandomMovie = movies[Math.floor(Math.random() * movies.length)];
  console.log(getRandomMovie);

  
    return (
      <div className="App">
        <button onClick={getRandomMovie}>Random</button>
        {movie}
      </div>
    );
  }


export default Random;
