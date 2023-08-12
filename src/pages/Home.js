import React, { useState } from 'react';
import ProductsList from './ProductsList'; 
import {Route, Routes , Link} from 'react-router-dom';
import styles from '../styles/home.module.css';



const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'url_for_image1',
    'url_for_image2',
    'url_for_image3',
    // Add more image URLs here
  ];

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const CategoryItem = ({ to, category, imageClass }) => (
    <Link to={to} onClick={() => handleCategorySelect(category)}>
      <div className={`${styles.category} ${styles[imageClass]}`}>
        <div className={styles.imageContainer}></div>
        <div className={styles.categoryText}>{category}</div>
      </div>
    </Link>
  );

  return (


    <div className="Home">
      <h2>Categories</h2>
      <div className={styles.divCat}>

      <CategoryItem to="/products/watch" category="Watches" imageClass="watch" />
      <CategoryItem to="/products/smartphones" category="smartphones" imageClass="smartphones" />
      <CategoryItem to="/products/fragrances" category="fragrances" imageClass="fragrances" />
      <CategoryItem to="/products/laptops" category="laptops" imageClass="laptops" />
      <CategoryItem to="/products/skincare" category="skincare" imageClass="skincare" />
      <CategoryItem to="/products/groceries" category="groceries" imageClass="groceries" />
      <CategoryItem to="/products/home-decoration" category="home-decoration" imageClass="home-decoration" />
      <CategoryItem to="/products/furniture" category="furniture" imageClass="furniture" />
      <CategoryItem to="/products/tops" category="tops" imageClass="tops" />
      <CategoryItem to="/products/womens-dresses" category="womens-dresses" imageClass="womens-dresses" />
      <CategoryItem to="/products/womens-shoes" category="womens-shoes" imageClass="womens-shoes" />
      <CategoryItem to="/products/mens-shirts" category="mens-shirts" imageClass="mens-shirts" />
      <CategoryItem to="/products/mens-shoes" category="mens-shoes" imageClass="mens-shoes" />
      <CategoryItem to="/products/bags" category="bags" imageClass="bags" />
      <CategoryItem to="/products/jewellery" category="jewellery" imageClass="jewellery" />
      <CategoryItem to="/products/sunglasses" category="sunglasses" imageClass="sunglasses" />
      <CategoryItem to="/products/automotive" category="automotive" imageClass="automotive" />
      <CategoryItem to="/products/lighting" category="lighting" imageClass="lighting" />
        
      </div>
      <Routes>
        <Route
          exact path="/products/:category"
          element={<ProductsList selectedCategory={selectedCategory} />}
        />
      </Routes>
    </div>

  );
};

export default Home;
