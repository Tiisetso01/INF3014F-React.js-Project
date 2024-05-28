import * as actionTypes from "./wishlist-types";

export const addToWishList = (itemID) => {
  return {
    type: actionTypes.ADD_TO_WISHLIST,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromWishList = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_WISHLIST,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQtyWishList = (itemID, qty) => {
  return {
    type: actionTypes.ADJUST_ITEM_QTY_WISHLIST,
    payload: {
      id: itemID,
      qty,
    },
  };
};
