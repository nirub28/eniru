import React, { useState } from 'react';
import ProductsList from './ProductsList'; 
import styles from '../styles/home.module.css';


const Home = () => {
  // State variable to track the selected category
  const [selectedCategory, setSelectedCategory] = useState('all'); // Initialize with 'all' to show all products

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="Home">
      <h2>Categories</h2>
      <div>
        <button onClick={() => handleCategorySelect('watch')}>Watches</button>
        <button onClick={() => handleCategorySelect('smartphones')}>Smart Phones</button>
        <button onClick={() => handleCategorySelect('laptops')}>Laptops</button>
        <button onClick={() => handleCategorySelect('fragrances')}>Fragrances</button>
        <button onClick={() => handleCategorySelect('skincare')}>Skincare</button>
        <button onClick={() => handleCategorySelect('groceries')}>groceries</button>
        <button onClick={() => handleCategorySelect('home-decoration')}>home-decoration</button>
        <button onClick={() => handleCategorySelect('furniture')}>furniture</button>
        <button onClick={() => handleCategorySelect('tops')}>tops</button>
        <button onClick={() => handleCategorySelect('womens-dresses')}>womens-dresses</button>
        <button onClick={() => handleCategorySelect('womens-shoes')}>womens-shoes</button>
        <button onClick={() => handleCategorySelect('mens-shirts')}>mens-shirts</button>
        <button onClick={() => handleCategorySelect('mens-shoes')}>mens-shoes</button>
        <button onClick={() => handleCategorySelect('bags')}>bags</button>
        <button onClick={() => handleCategorySelect('jewellery')}>jewellery</button>
        <button onClick={() => handleCategorySelect('sunglasses')}>sunglasses</button>
        <button onClick={() => handleCategorySelect('automotive')}>automotive</button>
        <button onClick={() => handleCategorySelect('lighting')}>lighting</button>
      </div>
      {/* Pass the selected category to the ProductsList component */}
      <ProductsList selectedCategory={selectedCategory} />
    </div>
  );
};

export default Home;
