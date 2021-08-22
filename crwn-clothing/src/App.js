import React, { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./Pages/homepage/homepage.component";
import { Route, Link, Switch } from "react-router-dom";
import HomePage from "./Pages/homepage/homepage.component";
import ShopPage from "./Pages/shop/shop.component";
import Header from "./Components/header/header.component";
import SignInAndSignUp from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

function App({ setCurrentUser }) {
  //const { setCurrentUser } = props;
  let unSubsribeFromAuth = null;

  useEffect(() => {
    unSubsribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //IF the userAuth is not not i.e. user is SignedIn
      if (userAuth) {
        //Fetch the userRef documentReference
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          console.log(snapshot.data());
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      }
      setCurrentUser(userAuth);
    });

    return () => {
      unSubsribeFromAuth();
    };
  }, [unSubsribeFromAuth]);

  return (
    <div>
      <Header otherprop="dummyProp" />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(App);
