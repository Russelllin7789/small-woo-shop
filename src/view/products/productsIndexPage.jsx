import React, { useState, useEffect } from "react";
import ProductService from "../../services/productService";
import ProductCardList from "./components/productCardList";
import Button from "@material/react-button";
import LoadingView from "../layout/loadingView";

const productService = new ProductService()

let isInited = false

const ProductsIndexPage = () => {

  const [products, setProducts] = useState([])

  const loadMoreProducts = () => {

  }


  useEffect(() => {
    const loadFunc = async () => {
      const result = await productService.getProducts(1)
      console.log(result)
      isInited = true

      setProducts([
        ...products,
        ...result
      ])
    }

    loadFunc()
  }, [productService])

  return (
    isInited ?
      (<div style={{ maxWidth: '1200px', margin: 'auto' }}>
        <ProductCardList products={products} />
        <div style={{ textAlign: 'center', padding: '36px 0' }}>
          <Button onClick={loadMoreProducts}>
            Load More
          </Button>
        </div>
      </div>) : (<LoadingView />)
  )
}

export default ProductsIndexPage