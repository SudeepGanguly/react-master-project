import React, { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./Pages/homepage/homepage.component";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./Pages/homepage/homepage.component";
import ShopPage from "./Pages/shop/shop.component";
import Header from "./Components/header/header.component";
import SignInAndSignUp from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up";
import Checkout from "./Pages/checkout/checkout.component";

import {
  auth,
  createUserProfileDocument,
  addCollectionsAndDocuments,
} from "./firebase/firebase.utils";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectCollectionsOverview } from "./redux/shop/shop.selectors";

function App({ currentUser, setCurrentUser, collectionsArray }) {
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

  // useEffect(() => {
  //   console.log("In Single use useFfect ");
  //   addCollectionsAndDocuments(
  //     "collections",
  //     collectionsArray.map(({ title, items }) => ({ title, items }))
  //   );
  // }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsOverview,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
