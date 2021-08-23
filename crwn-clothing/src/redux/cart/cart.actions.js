import CartActionTypes from "./cart.types";

const toggelCartHidden = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
  };
};

export default toggelCartHidden;
