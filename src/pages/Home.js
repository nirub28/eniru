import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Link } from "react-router-dom";
import styles from "../styles/home.module.css";
import {selectCategory } from "../actions/productActions";
import ProductsList from "./ProductsList";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/imageoi.png',
    "https://static.vecteezy.com/system/resources/previews/004/707/502/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
    "/gro.jpg",
  ];

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.products.selectedCategory);

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    dispatch(selectCategory(category));
  };

  useEffect(() => {
    // Rotate images every 4 seconds
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, [images.length]);

  const CategoryItem = ({ to, category,name,imageClass }) => (
    <Link className={styles.changeUnderline} to={to} onClick={() => handleCategorySelect(category)}>
      <div className={`${styles.category} ${styles[imageClass]}`}>
        <div className={styles.imageContainer}></div>
        <div className={styles.categoryText}>{name}</div>
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
          category="watch"
          imageClass="watch"
          name="Watches"
        />
        <CategoryItem
          to="/products/smartphones"
          category="smartphones"
          imageClass="smartphones"
          name="Smartphones"
        />
        <CategoryItem
          to="/products/fragrances"
          category="fragrances"
          imageClass="fragrances"
          name="Fragrances"
        />
        <CategoryItem
          to="/products/laptops"
          category="laptops"
          imageClass="laptops"
          name="Laptops"
        />
        <CategoryItem
          to="/products/skincare"
          category="skincare"
          imageClass="skincare"
          name="Skincare"
        />
        <CategoryItem
          to="/products/groceries"
          category="groceries"
          imageClass="groceries"
          name="Groceries"
        />
        <CategoryItem
          to="/products/home-decoration"
          category="home-decoration"
          imageClass="home-decoration"
          name="Home Decoration"
        />
        <CategoryItem
          to="/products/furniture"
          category="furniture"
          imageClass="furniture"
          name="Furniture"
        />
        <CategoryItem to="/products/tops" category="tops" imageClass="tops"  name="Tops"/>
        <CategoryItem
          to="/products/womens-dresses"
          category="womens-dresses"
          imageClass="womens-dresses"
          name="Women Dresses"
        />
        <CategoryItem
          to="/products/womens-shoes"
          category="womens-shoes"
          imageClass="womens-shoes"
          name="Women Shoes"
        />
        <CategoryItem
          to="/products/mens-shirts"
          category="mens-shirts"
          imageClass="mens-shirts"
          name="Men Shirts"
        />
        <CategoryItem
          to="/products/mens-shoes"
          category="mens-shoes"
          imageClass="mens-shoes"
          name="Men Shoes"
        />
        <CategoryItem to="/products/bags" category="bags" imageClass="bags" name="Bags"/>
        <CategoryItem
          to="/products/jewellery"
          category="jewellery"
          imageClass="jewellery"
          name="Jewellery"
        />
        <CategoryItem
          to="/products/sunglasses"
          category="sunglasses"
          imageClass="sunglasses"
          name="Sunglasses"
        />
        <CategoryItem
          to="/products/automotive"
          category="automotive"
          imageClass="automotive"
          name="Automotive"
        />
        <CategoryItem
          to="/products/lighting"
          category="lighting"
          imageClass="lighting"
          name="Lighting"
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
