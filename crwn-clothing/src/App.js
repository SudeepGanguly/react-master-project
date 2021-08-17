import React from "react";
import "./App.css";
import Homepage from "./Pages/homepage/homepage.component";
import { Route, Link } from "react-router-dom";
import HomePage from "./Pages/homepage/homepage.component";
import ShopPage from "./Pages/shop/shop.component";

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
