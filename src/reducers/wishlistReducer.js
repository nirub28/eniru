// wishlistReducer.js
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../actions/productActions';

const initialState = {
  wishlistItems: [],
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, action.payload],
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter((productId) => productId !== action.payload),
      };
    default:
      return state;
  }
};

export default wishlistReducer;
