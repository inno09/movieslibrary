import React, { useState } from "react";
import './App.css';
import NavBar from './components/NavBar';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  
  return (
    <div className="App">
      <NavBar isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick}/>
    </div>
  );
}

export default App;
