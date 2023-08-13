import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import styles from '../styles/products.module.css';
import { useParams , Link} from 'react-router-dom';

       
const ProductsList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const { category } = useParams();


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);

  return (
    <div className={styles.productListContainer}>
      <h2 className={styles.productListTitle}>{category}</h2>
      <ul className={styles.productList}>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/products/details/${product.id}`} className={styles.productLink}>
            <div className={styles.productItem}>
            <div className={styles.productImageContainer}>
              <img
                className={styles.productThumbnail}
                src={product.thumbnail || 'https://via.placeholder.com/150'}
                alt={product.title}
              />
            </div>
            <div className={styles.productDetails}>
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.productRating}>{product.rating} <img className={styles.imgStar} src='https://cdn-icons-png.flaticon.com/512/2107/2107957.png' alt='start'></img></p>
              <p className={styles.productPrice}>${product.price}</p>
              <p> Free delivery by Tomorrow</p>
            </div>
            </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
