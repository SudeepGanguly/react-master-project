import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config =
  // Your web app's Firebase configuration
  {
    apiKey: "AIzaSyAxIGG3aU6ks5N331WimGN6R67M_f-8jgA",
    authDomain: "crwn-db-3025d.firebaseapp.com",
    projectId: "crwn-db-3025d",
    storageBucket: "crwn-db-3025d.appspot.com",
    messagingSenderId: "1009759026164",
    appId: "1:1009759026164:web:206178fdc205d1398b17a1",
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
