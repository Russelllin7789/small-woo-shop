import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM
import Order from '../models/order'

const WooCommerce = new WooCommerceRestApi({
  url: 'http://localhost:8888/',
  consumerKey: 'ck_6fac49b6cc20e4df9df284b32e281dad767c3cd9',
  consumerSecret: 'cs_74afc150c7ceaa7ae5a24cbdc48fcb7cbe07b0c4',
  version: 'wc/v3'
})

class OrderService {
  submitOrder = (data) => {
    return WooCommerce.post('orders', data)
      .then((response) => {
        console.log('data:', response.data)
        return new Order(response.data)
      })
      .catch((error) => {
        console.log(error)
        return null
      })
  }

  getPaymentGateways() {
    return WooCommerce.get('payment_gateways')
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  getShippingMethods() {
    return WooCommerce.get('shipping_methods')
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  getOrder = (id) => {
    return WooCommerce.get(`orders/${id}`)
      .then((response) => {
        return new Order(response.data)
      })
      .catch((error) => {
        console.log(error)
        return null
      })
  }

  getOrders = () => {
    return WooCommerce.get('orders')
      .then((response) => {
        return response.data.map((rawData) => {
          return new Order(rawData)
        })
      })
      .catch((error) => {
        console.log(error)
        return null
      })
  }
}

export default OrderService