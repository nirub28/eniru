// productActions.js
import axios from 'axios';


export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR";
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';
export const SELECT_CATEGORY = "SELECT_CATEGORY";



export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get('/products.json');
    const products = response.data;
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: products,
    });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_ERROR,
      payload: error.message,
    });
  }
};

export const addToCart = (productId) => ({
  type: ADD_TO_CART,
  payload: productId,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const addToWishlist = (productId) => ({
  type: ADD_TO_WISHLIST,
  payload: productId,
});

export const removeFromWishlist = (productId) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: productId,
});

export const selectCategory = (category) => {
  return {
    type: SELECT_CATEGORY,
    payload: category,
  };
};
