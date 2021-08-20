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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //Check for SignOut , where the object is Null
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  //Checking if Data already exists
  if (!snapShot.exists) {
    //Fetching the values from the userAuth
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
