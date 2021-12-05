import React, { useState, useEffect } from "react";
import ProductService from "../../services/productService";

const productService = new ProductService()

const ProductsIndexPage = () => {

  const [products, serProducts] = useState([])


  useEffect(() => {
    const loadFunc = async () => {
      const result = await productService.getProducts(1)
      console.log(result)
    }

    loadFunc()
  }, [productService])

  return (
    <h1>ProductsIndexPage</h1>
  )
}

export default ProductsIndexPage