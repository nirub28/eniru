// Wishlist.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../actions/productActions';
import styles from '../styles/wishlist.module.css';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const products = useSelector((state) => state.products.products);

  const handleRemoveFromWishlist = (productId) => {
    dispatch(removeFromWishlist(productId));
  };

  if (wishlistItems.length === 0) {
    return (
      <div className={styles.emptyWishlist}>
        <p>Your wishlist is empty!</p>
        <Link to="/" className={styles.homeLink}>
          <button className={styles.homeButton}>Start Wishlisting</button>
        </Link>
        <div className={styles.emptyDiv}></div>
      </div>
    );
  }

  return (
    <div className={styles.wishlistContainer}>
      <h2>My Wishlist</h2>
      <p>Total Items: {wishlistItems.length}</p>
      <div className={styles.wishlistItems}>
        {wishlistItems.map((productId) => {
          const product = products.find((product) => product.id === productId);
          if (!product) {
            return null; // Handle product not found
          }
          return (
            <div key={product.id} className={styles.wishlistItem}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className={styles.wishlistItemImage}
              />
              <div className={styles.wishlistItemDetails}>
                <h3>
                <Link
                      className={styles.carprodName}
                      to={`/products/details/${product.id}`}
                    >
                      {product.title}
                    </Link>
                </h3>
                <p>Price: ${product.price}</p>
                <button
                  onClick={() => handleRemoveFromWishlist(product.id)}
                  className={styles.removeButton}
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.emptyDiv} ></div>
    </div>
  );
};

export default Wishlist;
