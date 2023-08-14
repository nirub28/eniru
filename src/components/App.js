import React from 'react';
import {Route, Routes } from 'react-router-dom';
import { Home,ProductsList,ProductDetail,Cart, Wishlist } from '../pages';
import Header from './Header';
import Footer from './Footer';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {

  return (
      <div className="App">

      <ToastContainer // for notifications
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />


        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductsList />} />
          <Route path="/products/details/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <Footer />
      </div>
  );
};

export default App;
