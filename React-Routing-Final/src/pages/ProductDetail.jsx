import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetail = () => {
    const params = useParams();
  return (
    <>
    <div>Product Detail {params.productId}</div>
    <p><Link to=".." relative='path'>Back</Link></p>
    </>
  )
}

export default ProductDetail