import React from 'react';
import {Route, Routes } from 'react-router-dom';
import { Home,ProductsList } from '../pages';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductsList />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </div>
  );
};

export default App;