import React, { useState, useEffect } from 'react';
import ProductsList from './ProductsList'; 
import {Route, Routes , Link} from 'react-router-dom';
import styles from '../styles/home.module.css';



const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://static.vecteezy.com/system/resources/previews/007/145/847/non_2x/ecommerce-word-concepts-banner-online-shopping-retail-digital-purchase-payment-trading-presentation-website-isolated-lettering-typography-idea-with-linear-icons-outline-illustration-vector.jpg',
    'https://static.vecteezy.com/system/resources/previews/001/937/856/non_2x/paper-art-shopping-online-on-smartphone-sale-promotion-backgroud-banner-for-market-ecommerce-free-vector.jpg',
    'https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=2000',
  ];

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    // Rotate images every 3 seconds
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

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

  const imgdivinStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (


    <div className="Home">

        <div className={styles.imgdiv}>
        <div className={styles.imgdivin} style={imgdivinStyle}></div>
        </div>

      <h2>&nbsp;&nbsp;&nbsp;&nbsp;Categories:</h2>
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
