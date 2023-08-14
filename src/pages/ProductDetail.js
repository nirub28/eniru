import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../actions/productActions";
import styles from "../styles/prodDetails.module.css";


import { toast } from "react-toastify"; // to add notifications
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishlist = useSelector((state) => state.wishlist.wishlistItems);

  // Fetch products data if not already loaded
  useEffect(() => {
    if (!products) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products]);

  // Find the product using the converted productId
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  useEffect(() => {
    if (product && product.images.length > 0) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  if (!product) {
    return <div>Product not found</div>;
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

  const isItemInCart = cartItems.includes(product.id);
  const isItemInWishlist = wishlist.includes(product.id);

  const beforeDiscount = Math.round(
    product.price + (product.discountPercentage / 100) * product.price
  );

  
  const handleAddCart = (id) => {
    dispatch(addToCart(id));
    toast.success("Added to Cart");
  }  

  const handleAddWish = (id) => {
    dispatch(addToWishlist(id))
        toast.success("Added to Wishlist");
  }

  const handleRemoveWish = (id) => {
    dispatch(removeFromWishlist(id));
        toast.success("Removed From Wishlist");
  }

  return (
    <div className={styles.productDetailContainer}>
      <div className={styles.imageContainer}>
        <img
          src={selectedImage}
          alt=""
          style={{ width: "100%", maxHeight: "400px", objectFit: "contain" }}
        />
        <div className={styles.smallImagesContainer}>
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              style={{ width: "60px", margin: "5px", cursor: "pointer" }}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      </div>
      <div className={styles.productDetailsContainer}>
        <h2>{product.title}</h2>

        <div>
          Price: <span className={styles.pricebold}>${product.price}</span>
          <span className={styles.pricediscount}> ${beforeDiscount} </span>
          <span className={styles.pricedisval}>
            {product.discountPercentage}%off
          </span>
        </div>

        <p className={styles.productRating}>
          {product.rating}{" "}
          <img
            className={styles.imgStar}
            src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png"
            alt="start"
          ></img>
          <span className={styles.ratingCount}>172 ratings</span>
        </p>
        <p>
          <b>Brand :</b> {product.brand}
        </p>
        <p>
          {" "}
          <b> About :</b> {product.description}
        </p>

        <div>
          {isItemInWishlist ? (
            <button
              type="button"
              onClick={() => handleRemoveWish(product.id)}
              className={`${styles.actionButton} ${styles.removeFromWishlist}`}
            >
              Remove from Wishlist
            </button>
          ) : (
            <button
              type="button"
              onClick={() => handleAddWish(product.id)}
              className={`${styles.actionButton} ${styles.addToWishlist}`}
            >
              Add to Wishlist
            </button>
          )}
          {isItemInCart ? (
            <Link to="/cart" className={styles.goToCartLink}>
              <button
                className={`${styles.actionButton} ${styles.goToCartButton}`}
              >
                Go to Cart
              </button>
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => handleAddCart(product.id)}
              className={`${styles.actionButton} ${styles.addToCartButton}`}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
