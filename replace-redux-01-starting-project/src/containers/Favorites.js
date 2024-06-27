import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.css';
import { ProductsContext } from '../context/products-context';

const Favorites = props => {
  // const favoriteProducts = useSelector(state =>
  //   state.shop.products.filter(p => p.isFavorite)
  // );

  const productsList = useContext(ProductsContext).products;

  const favoriteProducts = productsList.filter((prod) => prod.isFavorite);

  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;