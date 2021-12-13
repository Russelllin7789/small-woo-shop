import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM
import Product from "../models/product";

const WooCommerce = new WooCommerceRestApi({
  url: 'http://localhost:8888/',
  consumerKey: 'ck_98e50c0bbe1677f6b81ded7b5e00e8dfe09fdb60',
  consumerSecret: 'cs_d4ea54a6da5ab2f5fae1e204bf3a95b00aa23497',
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
}

export default ProductService