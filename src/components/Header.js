import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
import styles from '../styles/header.module.css';

const Header = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.nameContainer}>
        <span className={styles.appName}>
          <a className={`${styles.appLink} ${styles.prodLink}`} href="/">
            eNiru
          </a>
        </span>
        <span className={styles.prodList}>
          <a className={styles.prodLink} href="/Products">
            Products
          </a>
        </span>
        <span className={styles.addProd}>
          {" "}
          <a className={styles.prodLink} href="/add">
            {" "}
            Add a product{" "}
            <img
              className={styles.addIcon}
              src="https://cdn-icons-png.flaticon.com/256/4315/4315609.png"
              alt="add-pic"
            />{" "}
          </a>
        </span>
      </div>
      <div className={styles.cartIconContainer}>
        <a href="/cart">
          <img
            className={styles.cart}
            src="https://cdn-icons-png.flaticon.com/512/3737/3737372.png"
            alt="cart-icon"
          />
        </a>{" "}
        <sup className={styles.cartCount}>{"len"}</sup>
      </div>
      <div className={styles.userContainer}>
        <span className={styles.name}>Niranjan</span>
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
