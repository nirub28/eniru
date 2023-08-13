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
    // Rotate images every 4 seconds
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, [images.length]);

  const CategoryItem = ({ to, category, imageClass }) => (
    <Link className={styles.changeUnderline} to={to} onClick={() => handleCategorySelect(category)}>
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
          category="Smartphones"
          imageClass="smartphones"
        />
        <CategoryItem
          to="/products/fragrances"
          category="Fragrances"
          imageClass="fragrances"
        />
        <CategoryItem
          to="/products/laptops"
          category="Laptops"
          imageClass="laptops"
        />
        <CategoryItem
          to="/products/skincare"
          category="Skincare"
          imageClass="skincare"
        />
        <CategoryItem
          to="/products/groceries"
          category="Groceries"
          imageClass="groceries"
        />
        <CategoryItem
          to="/products/home-decoration"
          category="Home Decoration"
          imageClass="home-decoration"
        />
        <CategoryItem
          to="/products/furniture"
          category="Furniture"
          imageClass="furniture"
        />
        <CategoryItem to="/products/tops" category="Tops" imageClass="tops" />
        <CategoryItem
          to="/products/womens-dresses"
          category="Womens Dresses"
          imageClass="womens-dresses"
        />
        <CategoryItem
          to="/products/womens-shoes"
          category="Womens Shoes"
          imageClass="womens-shoes"
        />
        <CategoryItem
          to="/products/mens-shirts"
          category="Mens Shirts"
          imageClass="mens-shirts"
        />
        <CategoryItem
          to="/products/mens-shoes"
          category="Mens Shoes"
          imageClass="mens-shoes"
        />
        <CategoryItem to="/products/bags" category="Bags" imageClass="bags" />
        <CategoryItem
          to="/products/jewellery"
          category="Jewellery"
          imageClass="jewellery"
        />
        <CategoryItem
          to="/products/sunglasses"
          category="Sunglasses"
          imageClass="sunglasses"
        />
        <CategoryItem
          to="/products/automotive"
          category="Automotive"
          imageClass="automotive"
        />
        <CategoryItem
          to="/products/lighting"
          category="Lighting"
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
