import React, { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./Pages/homepage/homepage.component";
import { Route, Link, Switch } from "react-router-dom";
import HomePage from "./Pages/homepage/homepage.component";
import ShopPage from "./Pages/shop/shop.component";
import Header from "./Components/header/header.component";
import SignInAndSignUp from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  let unSubsribeFromAuth = null;

  useEffect(() => {
    unSubsribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //IF the userAuth is not not i.e. user is SignedIn
      if (userAuth) {
        //Fetch the userRef documentReference
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data });
        });
      }
      setCurrentUser(userAuth);
    });
    console.log("state change");
    console.log(currentUser);

    return () => {
      unSubsribeFromAuth();
    };
  });

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
