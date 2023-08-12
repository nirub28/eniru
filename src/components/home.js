import React, { useState } from 'react';
import ProductsList from './ProductsList'; // Adjust the path to your component

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
        {/* Add category buttons */}
        <button onClick={() => handleCategorySelect('all')}>All</button>
        <button onClick={() => handleCategorySelect('watch')}>Watches</button>
        {/* Add more category buttons as needed */}
      </div>
      {/* Pass the selected category to the ProductsList component */}
      <ProductsList selectedCategory={selectedCategory} />
    </div>
  );
};

export default Home;
