import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM
import Product from "../models/product";

const WooCommerce = new WooCommerceRestApi({
  url: 'http://localhost:8888/',
  consumerKey: 'ck_6fac49b6cc20e4df9df284b32e281dad767c3cd9',
  consumerSecret: 'cs_74afc150c7ceaa7ae5a24cbdc48fcb7cbe07b0c4',
  version: 'wc/v3'
})

class ProductService {
  getProducts = (page) => {
    return WooCommerce.get('products', {
      page: page,
      per_page: 3
    })
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.log(error)
        return []
      })
  }

  getProductById = (id) => {
    return WooCommerce.get(`products/${id}`, {
    }).then((response) => {
      return new Product(response.data)
    }).catch((error) => {
      console.log(error)
      return null
    })
  }

  getProductsByIds = (ids) => {
    return WooCommerce.get('products', {
      page: 1,
      include: ids
    }).then((response) => {
      const products = response.data.map((rawData) => {
        return new Product(rawData)
      })
      return products
    }).catch((error) => {
      console.log(error)
      return []
    })
  }
}

export default ProductService