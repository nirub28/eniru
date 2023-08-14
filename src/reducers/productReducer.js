// productReducer.js
const initialState = {
    products: [],
    loading: true,
    error: null,
    selectedCategory: "",
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS_SUCCESS':
        return {
          ...state,
          products: action.payload,
          loading: false,
          error: null,
        };
      case 'FETCH_PRODUCTS_ERROR':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case "SELECT_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload,
      };

      default:
        return state;
    }
  };
  
  export default productReducer;
  