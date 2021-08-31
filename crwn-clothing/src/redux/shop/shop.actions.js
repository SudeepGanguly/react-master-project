import { ShopActionTypes } from "./shop.types";

export const updateShop = (collectionsMap) => {
  return {
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap,
  };
};
