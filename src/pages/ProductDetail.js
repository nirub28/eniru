import React, { useState, useEffect } from 'react';
import {Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import styles from '../styles/prodDetails.module.css'

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  // State to track wishlist and cart items
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);



  // Fetch products data if not already loaded
  useEffect(() => {
    if (!products) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products]);

  // Find the product using the converted productId
  const product = products.find((product) => product.id === parseInt(productId));

  useEffect(() => {
    // Retrieve wishlist and cart items from local storage and set state
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setWishlist(storedWishlist);
    setCart(storedCart);
  }, []);

  if (!product) {
    return <div>Product not found</div>;
  }

  if (!selectedImage && product.images.length > 0) {
    setSelectedImage(product.images[0]);
  }

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const isItemInCart = cart.includes(product.id);


  const addToWishlist = () => {
    // Add the product to the wishlist array in local storage and update state
    if (!wishlist.includes(product.id)) {
      const updatedWishlist = [...wishlist, product.id];
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      setWishlist(updatedWishlist);
    }
  };

  const addToCart = () => {
    // Add the product to the cart array in local storage and update state
    if (!cart.includes(product.id)) {
      const updatedCart = [...cart, product.id];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setCart(updatedCart);
    }
  };

  const removeFromWishlist = () => {
    const updatedWishlist = wishlist.filter((id) => id !== product.id);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
  };



  return (
    <div className={styles.productDetailContainer}>
    <div className={styles.imageContainer}>
      <img
        src={selectedImage}
        alt=""
        style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }}
      />
      <div className={styles.smallImagesContainer}>
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            style={{ width: '60px', margin: '5px', cursor: 'pointer' }}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </div>
    <div className={styles.productDetailsContainer}>
      <h2>{product.title}</h2>
      <p>{product.discountPercentage}</p>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>{product.brand}</p>
      <p>{product.rating}</p>
      {wishlist.includes(product.id) ? (
        <button type="button" onClick={removeFromWishlist}>
          Remove from Wishlist
        </button>
      ) : (
        <button type="button" onClick={addToWishlist}>
          Add to Wishlist
        </button>
      )}
       {isItemInCart ? (
         <Link to="/cart" className={styles.goToCartLink}>
         <button className={styles.goToCartButton}>Go to Cart</button>
        </Link>
        ) : (
          <button type="button" onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
