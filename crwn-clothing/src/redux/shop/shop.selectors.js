import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state) => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsOverview = createSelector(
  [selectShopCollection],
  (collection) =>
    collection ? Object.keys(collection).map((key) => collection[key]) : []
);

export const selectCollections = (collectionURLParam) =>
  createSelector([selectShopCollection], (collections) =>
    collections ? collections[collectionURLParam] : null
  );
