import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, removeFromCart } from "../actions/productActions";
import styles from "../styles/cart.module.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { products, cartItems } = useSelector((state) => ({
    products: state.products.products,
    cartItems: state.cart.cartItems,
  }));

  // Fetch products data if not already loaded
  useEffect(() => {
    if (!products || products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products]);

  // Function to remove an item from the cart
  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  // Function to get product details by ID
  const getProductById = (productId) => {
    return products.find((product) => product.id === productId);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, productId) => total + getProductById(productId).price,
    0
  );

  // Calculate TAX (5%)
  const tax = (totalPrice * 0.05).toFixed(2);

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyWishlist}>
        <p>Your Cart Is Empty!</p>
        <Link to="/" className={styles.homeLink}>
          <button className={styles.homeButton}>Shop Now</button>
        </Link>
        <div className={styles.emptyDiv}></div>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartItems}>
        <h2>Cart Items</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((productId) => {
            const product = getProductById(productId);
            if (!product) {
              return (
                <div key={productId} className={styles.cartItem}>
                  <p>Product not found.</p>
                </div>
              );
            }
            return (
              <div key={product.id} className={styles.cartItem}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className={styles.cartItemImage}
                />
                <div className={styles.carDet}>
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
                    onClick={() => handleRemoveFromCart(product.id)}
                    className={styles.removeButton}
                  >
                    Remove from Cart
                  </button>
                </div>
                <div className={styles.delcheck}>
                  Delivery by Tomorrow | <span>Free</span> <span>$10</span>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className={styles.cartSummary}>
        <h4>PRICE DETAILS</h4>
        <hr />
        <div className={styles.priceDetailRow}>
          <div className={styles.priceLabel}>
            Price ({cartItems.length} items)
          </div>
          <div>${totalPrice}</div>
        </div>
        <div className={styles.priceDetailRow}>
          <div className={styles.priceLabel}>Tax (5%)</div>
          <div>${tax}</div>
        </div>
        <div className={styles.priceDetailRow}>
          <div className={styles.priceLabel}>Delivery Fee</div>
          <div className={styles.delcheck}>
            <span>Free</span> <span>$10</span>
          </div>
        </div>
        <hr />
        <div className={styles.priceDetailRow}>
          <div className={styles.priceLabel}>Total Amount</div>
          <div>${(totalPrice + parseFloat(tax)).toFixed(2)}</div>
        </div>
        <hr />
        {totalPrice > 0 ? (
          <button className={styles.placeOrder} type="submit">
            PLACE ORDER
          </button>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default Cart;
