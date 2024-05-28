import * as actionTypes from "./wishlist-types";
import { easternProducts, freestateProducts, kznProducts, limpopoProducts, mpumalangaProducts, westernProducts } from "../../Constants/Constants.js";

const INITIAL_STATE = {
  products: [
    ...limpopoProducts,
    ...westernProducts,
    ...freestateProducts,
    ...kznProducts,
    ...mpumalangaProducts,
    ...easternProducts
  ],
  wishlist: [],

};

const wishlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_WISHLIST:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inWishList = state.wishlist.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        wishlist: inWishList
          ? state.wishlist.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.wishlist, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    
    default:
      return state;
  }
};

export default wishlistReducer;
