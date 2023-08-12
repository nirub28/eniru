import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get('/products.json'); 
    const products = response.data;
    dispatch({
      type: 'FETCH_PRODUCTS_SUCCESS',
      payload: products,
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_PRODUCTS_ERROR',
      payload: error.message,
    });
  }
};
