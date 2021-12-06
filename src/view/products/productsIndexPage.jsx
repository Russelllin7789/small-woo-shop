import React, { useState, useEffect } from "react";
import ProductService from "../../services/productService";
import ProductCardList from "./components/productCardList";

const productService = new ProductService()

const ProductsIndexPage = () => {

  const [products, setProducts] = useState([])


  useEffect(() => {
    const loadFunc = async () => {
      const result = await productService.getProducts(1)
      console.log(result)

      setProducts([
        ...products,
        ...result
      ])
    }

    loadFunc()
  }, [productService])

  return (
    <div style={{ maxWidth: '1200px', margin: 'auto' }}>
      <ProductCardList products={products} />
    </div>
  )
}

export default ProductsIndexPage