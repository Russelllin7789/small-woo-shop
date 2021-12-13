import React, { useEffect, useState, useRef } from "react";
import {
  useParams,
} from 'react-router-dom'
import LoadingView from '../layout/loadingView'
import ProductService from '../../services/productService'

const productService = new ProductService()

const ProductsShowPage = () => {
  let { id } = useParams()
  return (
    <h1>ProductsShowPage</h1>
  )
}

export default ProductsShowPage