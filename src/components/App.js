import React from 'react';
import {Route, Routes } from 'react-router-dom';
import { Home,ProductsList,ProductDetail,Cart } from '../pages';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductsList />} />
          <Route path="/products/details/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
  );
};

export default App;
