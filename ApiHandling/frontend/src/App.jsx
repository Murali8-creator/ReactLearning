import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState('armchair');  
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  
  
  useEffect(() => {
    const controller = new AbortController()
    ;(async () => {
      try {
        setError(false);
        const response = await axios.get('/api/products?search='+search,{
          signal: controller.signal
        });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if(axios.isCancel(error)){
          console.log('Request Canceled', error.message);
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();

    //clean up code
    return () => {
      controller.abort();
    }
  }, [search]);


  return error ? (
    <h1>Something went wrong</h1>
  ) : loading ? (
    <h1>Loading..</h1>
  ) : (
    <>
      <h1>API in react</h1>
      <input type="text" placeholder='search' value={search} onChange={(e) => setSearch(e.target.value)}/>
      <h2>No of Products are : {products.length}</h2>
    </>
  );
}

export default App;

