import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Discover from './components/Discover';
import Favorites from './components/Favorites';
import Popular from './components/Popular.js';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  
  return (
    <div className="App">
      <NavBar isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick}/>
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
