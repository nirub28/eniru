import React, { useState, useEffect } from "react";
import ProductsList from "./ProductsList";
import { Route, Routes, Link } from "react-router-dom";
import styles from "../styles/home.module.css";

const Home = () => {

  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/imageoi.png',
    "https://static.vecteezy.com/system/resources/previews/004/707/502/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
    "/gro.jpg",
  ];

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    // Rotate images every 3 seconds
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, [images.length]);

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
      <div className={styles.spacediv}></div>

      <div className={styles.imageContainer}>
        <img
          src={images[currentImageIndex]}
          alt="Rotating Banner"
          style={{ opacity: 2, transition: "opacity 1s ease-in-out" }}
        />
      </div>

      <h2>&nbsp;&nbsp;&nbsp;&nbsp;Categories:</h2>
      <div className={styles.divCat}>
        <CategoryItem
          to="/products/watch"
          category="Watches"
          imageClass="watch"
        />
        <CategoryItem
          to="/products/smartphones"
          category="smartphones"
          imageClass="smartphones"
        />
        <CategoryItem
          to="/products/fragrances"
          category="fragrances"
          imageClass="fragrances"
        />
        <CategoryItem
          to="/products/laptops"
          category="laptops"
          imageClass="laptops"
        />
        <CategoryItem
          to="/products/skincare"
          category="skincare"
          imageClass="skincare"
        />
        <CategoryItem
          to="/products/groceries"
          category="groceries"
          imageClass="groceries"
        />
        <CategoryItem
          to="/products/home-decoration"
          category="home-decoration"
          imageClass="home-decoration"
        />
        <CategoryItem
          to="/products/furniture"
          category="furniture"
          imageClass="furniture"
        />
        <CategoryItem to="/products/tops" category="tops" imageClass="tops" />
        <CategoryItem
          to="/products/womens-dresses"
          category="womens-dresses"
          imageClass="womens-dresses"
        />
        <CategoryItem
          to="/products/womens-shoes"
          category="womens-shoes"
          imageClass="womens-shoes"
        />
        <CategoryItem
          to="/products/mens-shirts"
          category="mens-shirts"
          imageClass="mens-shirts"
        />
        <CategoryItem
          to="/products/mens-shoes"
          category="mens-shoes"
          imageClass="mens-shoes"
        />
        <CategoryItem to="/products/bags" category="bags" imageClass="bags" />
        <CategoryItem
          to="/products/jewellery"
          category="jewellery"
          imageClass="jewellery"
        />
        <CategoryItem
          to="/products/sunglasses"
          category="sunglasses"
          imageClass="sunglasses"
        />
        <CategoryItem
          to="/products/automotive"
          category="automotive"
          imageClass="automotive"
        />
        <CategoryItem
          to="/products/lighting"
          category="lighting"
          imageClass="lighting"
        />
      </div>
      <Routes>
        <Route
          exact
          path="/products/:category"
          element={<ProductsList selectedCategory={selectedCategory} />}
        />
      </Routes>
    </div>
  );
};

export default Home;
