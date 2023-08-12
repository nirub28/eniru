import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from '../styles/header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link to="/" className={styles.logo}>
          eNiru
        </Link>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/" exact activeClassName={styles.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products/watch" activeClassName={styles.active}>
              Watches
            </NavLink>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
