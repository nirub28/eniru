import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import styles from '../styles/cart.module.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // Fetch products data if not already loaded
  useEffect(() => {
    if (!products) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products]);

  // Fetch cart items from local storage and set cartItems state
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((id) => id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  // Function to get product details by ID
  const getProductById = (productId) => {
    return products.find((product) => product.id === productId);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  // Calculate GST (8%)
  const gst = (totalPrice * 0.08).toFixed(2);

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
              return null; 
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
                    <Link to={`/products/details/${product.id}`}>
                      {product.title}
                    </Link>
                  </h3>
                <p>Price: ${product.price}</p>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className={styles.removeButton}
                >
                  Remove from Cart
                </button>
                </div>
                <div className={styles.delcheck}>Delivery by Tomorrow | <span>Free</span> <span>₹40</span></div>
              </div>
            );
          })
        )}
      </div>
      <div className={styles.cartSummary}>
  <h4>PRICE DETAILS</h4>
  <hr />
  <div className={styles.priceDetailRow}>
    <div className={styles.priceLabel}>Price ({cartItems.length} items)</div>
    <div>${totalPrice}</div>
  </div>
  <div className={styles.priceDetailRow}>
    <div className={styles.priceLabel}>Tax (8%)</div>
    <div>${gst}</div>
  </div>
  <div className={styles.priceDetailRow}>
    <div className={styles.priceLabel}>Delivery Fee</div>
    <div className={styles.delcheck}>
      <span>Free</span> <span>₹40</span>
    </div>
  </div>
  <hr/>
  <div className={styles.priceDetailRow}>
    <div className={styles.priceLabel}>Total Amount</div>
    <div>${(totalPrice + parseFloat(gst)).toFixed(2)}</div>
  </div>
  <hr/>
  <button className={styles.placeOrder} type='submit'>PLACE ORDER</button>
</div>

    </div>
  );
};

export default Cart;