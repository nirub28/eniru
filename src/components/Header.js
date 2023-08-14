import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/header.module.css';

const Header = () => {
  // Get the cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calculate the cart count
  const cartCount = cartItems.length;

  return (
    <div className={styles.nav}>
      <div className={styles.nameContainer}>
        <span className={styles.appName}>
          <a className={`${styles.appLink} ${styles.prodLink}`} href="/">
            eNiru
          </a>
        </span>
        <span className={styles.wishlist}>
          <a className={styles.wishListLink} href="/wishlist">
            Wishlist
            <img
              className={styles.whishlistIcon}
              src="https://cdn-icons-png.flaticon.com/512/7245/7245139.png"
              alt="add-pic"
            />
          </a>
        </span>
      </div>
      <div className={styles.cartIconContainer}>
        <a href="/cart">
          <img
            className={styles.cart}
            src="https://cdn-icons-png.flaticon.com/512/3737/3737173.png"
            alt="cart-icon"
          />
        </a>{" "}
        {/* Display the cart count */}
        <sup className={styles.cartCount}>{cartCount}</sup>
      </div>
      <div className={styles.userContainer}>
        <span className={styles.name}>YOU</span>
        <img
          className={styles.profilePic}
          src="https://cdn2.iconfinder.com/data/icons/business-man-8/512/7-1024.png"
          alt="profile-pic"
        />
      </div>
    </div>
  );
};

export default Header;
