import React from "react";
import "./App.css";
import Homepage from "./Pages/homepage/homepage.component";
import { Route, Link, Switch } from "react-router-dom";
import HomePage from "./Pages/homepage/homepage.component";
import ShopPage from "./Pages/shop/shop.component";
import Header from "./Components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
