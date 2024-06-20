import { useParams } from 'react-router-dom';
import ProductsPage from './ProductsPage';

function ProductDetailPage() {

    const params = useParams();
  return (
    <>
      <h1>Product Details!</h1>
      {/* <ProductsPage/> */}
      {params.productId}
    </>
  );
}

export default ProductDetailPage;
