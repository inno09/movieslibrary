import React, { useState } from "react";

const movieAPI = "http://localhost:3000/movies";

function Discover({addMovie}) {
  const [fullTitle, setFullTitle] = useState("");
  // const [releaseState, setReleaseState] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(movieAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullTitle,
        image,
      }),
    })
      .then((r) => r.json())
      .then((newMovie) => addMovie(newMovie));

      setFullTitle("");
      setImage("");
  }

  return (
    <form className="new-poem-form" onSubmit={handleSubmit} >
      <input 
        placeholder="Title(Year)" 
        value={fullTitle}
        onChange={(e) => setFullTitle(e.target.value)}
      />

       <input 
        placeholder="Poster" 
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      
      <input 
        type="submit" 
        value="Add Your Movie" 
      />
    </form>
  )
  
  }

export default Discover;