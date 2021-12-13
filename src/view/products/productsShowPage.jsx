import React, { useEffect, useState, useRef } from "react";
import {
  useParams,
} from 'react-router-dom'
import LoadingView from '../layout/loadingView'
import ProductService from '../../services/productService'

const productService = new ProductService()

const ProductsShowPage = () => {
  let { id } = useParams()
  let isInited = useRef(false)
  const [product, setProduct] = useState([])

  useEffect(() => {
    const loadFunc = async () => {
      const result = await productService.getProductById(id)
      isInited.current = true
      setProduct(result)
    }

    loadFunc()
  }, [id])

  return (
    <div>
      {
        (isInited.current && (product)) ? (<h1>{product.name}</h1>) : (<LoadingView />)
      }
    </div>
  )
}

export default ProductsShowPage