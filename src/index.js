// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import{BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import productReducer from './reducers/productReducer';
import { fetchProducts } from './actions/productActions';


import App from './components/App';

const rootReducer = combineReducers({
  products: productReducer,
  // Add other reducers if needed
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchProducts());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Provider store={store}>
    <App />
  </Provider>
  </Router>
);

