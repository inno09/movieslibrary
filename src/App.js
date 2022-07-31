import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
// import Random from './components/Random';
import Discover from './components/Discover';
import Landing from "./components/Landing";

function App() {
 
    
  
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/discover">
          <Discover />
        </Route>
        {/* <Route exact path="/random">
          <Random />
        </Route> */}
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
      
    </div>
    
  );
}

export default App;