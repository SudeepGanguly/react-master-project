import React from "react";
import "./App.css";
import Homepage from "./Pages/homepage/homepage.component";
import { Route, Link } from "react-router-dom";
import HomePage from "./Pages/homepage/homepage.component";

export const HatsPage = () => {
  return (
    <div>
      <h1>HATSPAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/hats" component={HatsPage} />
    </div>
  );
}

export default App;
