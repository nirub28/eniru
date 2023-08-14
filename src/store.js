// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Import your reducers
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import wishlistReducer from './reducers/wishlistReducer';

// Combine reducers
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
});

// Configuration object for Redux Persist
const persistConfig = {
  key: 'root', // key used to access the persisted state in the storage
  storage, // storage engine to be used (localStorage in this case)
};

// Create a persisted reducer using the persistReducer function
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
