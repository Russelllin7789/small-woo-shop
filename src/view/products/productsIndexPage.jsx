import React, { useState, useEffect } from "react";
import ProductService from "../../services/productService";

const productService = new ProductService()

const ProductsIndexPage = () => {

  const [products, serProducts] = useState([])

  productService.getProducts(1)

  useEffect(() => {

  }, [])

  return (
    <h1>ProductsIndexPage</h1>
  )
}

export default ProductsIndexPage