import React from "react";
import ProductCard from './productCard'

const ProductCardList = ({ products }) => {
  return (
    <div>
      {
        products.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })
      }
    </div>
  )
}

export default ProductCardList