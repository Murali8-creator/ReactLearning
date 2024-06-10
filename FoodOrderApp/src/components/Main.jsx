import React, { useEffect, useState } from 'react';
import logo from '../../backend/public/images/beef-tacos.jpg';

export const Main = ({ onAddCartItems}) => {
  const [loading, setLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async function fetchMeals() {
      try {
        const response = await fetch('http://localhost:3000/meals');
        const data = await response.json();
        setFetchedData(data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    })();
  }, []);



  let content = loading ? (
    <h1>Loading data</h1>
  ) : fetchedData.length != 0 ? (
    fetchedData
  ) : error ? (
    <h1>Something Went Wrong</h1>
  ) : null;

  function handleAddToCart(item){
    onAddCartItems(item);
  }
  return (
    <div id='meals'>
      {fetchedData.length != 0 &&
        content.map((item) => {
          return (
            <ul className='meal-item' key={item.id}>
              <article>
                <img src={`../../backend/public/${item.image}`} alt='loading' />
                <h3>{item.name}</h3>
                <li className='meal-item-price'>$ {item.price}</li>
                <li className='meal-item-description'>{item.description}</li>
                <div className="meal-item-actions">
                <button className='button' onClick={() => handleAddToCart(item)}>Add to Cart</button>
                </div>
              </article>
            </ul>
          );
        })}
    </div>
  );
};

