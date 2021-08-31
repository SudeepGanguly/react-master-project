import { ShopActionTypes } from "./shop.types";
import {
  firestore,
  convertCollectionSnapShotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStarts = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartsAsync = () => (dispatch) => {
  const collectionRef = firestore.collection("collections");
  dispatch(fetchCollectionsStarts());

  collectionRef
    .get()
    .then((snapShot) => {
      const collectionsMap = convertCollectionSnapShotToMap(snapShot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    })
    .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
};
