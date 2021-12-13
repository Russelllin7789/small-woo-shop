import React, { useEffect, useState, useRef } from "react";
import {
  useParams,
  Navigate,
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

  const contentView = (() => {
    if (isInited.current) {
      if (product) {
        return (<h1>{product.name}</h1>)
      } else {
        return (<Navigate to="/products" />)
      }
    } else {
      return (<LoadingView />)
    }
  })()

  return (
    <div>
      {
        contentView
      }
    </div>
  )
}

export default ProductsShowPage