import React, { useState, useEffect } from "react";
import ProductService from "../../services/productService";
import ProductCardList from "./components/productCardList";
import Button from "@material/react-button";

const productService = new ProductService()

const ProductsIndexPage = () => {

  const [products, setProducts] = useState([])

  const loadMoreProducts = () => {

  }


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
      <div style={{ textAlign: 'center', padding: '36px 0' }}>
        <Button onClick={loadMoreProducts}>
          Load More
        </Button>
      </div>
    </div>
  )
}

export default ProductsIndexPage