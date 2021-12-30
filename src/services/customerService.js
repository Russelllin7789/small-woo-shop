import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import Customer from '../models/customer'
import Cookies from "js-cookie";

const CUSTOMER_KEY = 'customer'

const WooCommerce = new WooCommerceRestApi({
  url: 'http://localhost:8888/',
  consumerKey: 'ck_6fac49b6cc20e4df9df284b32e281dad767c3cd9',
  consumerSecret: 'cs_74afc150c7ceaa7ae5a24cbdc48fcb7cbe07b0c4',
  version: 'wc/v3'
})

class CustomerService {
  constructor() {
    this.customerStorage = Cookies.get(CUSTOMER_KEY)
    console.log('customerStorage:', this.customerStorage)
    if (!!this.customerStorage) {
      this.clearCustomerStorage()
    } else {
      this.customerStorage = JSON.parse(this.customerStorage)
      console.log('after parse:', this.customerStorage)
    }
  }

  clearCustomerStorage = () => {
    this.customerStorage = {}
    this.saveToCustomerStorage()
  }

  saveToCustomerStorage = () => {
    Cookies.set(CUSTOMER_KEY, this.customerStorage, { expires: 7 })
  }

  setCustomerIdToCookie = (customerId) => {
    this.customerStorage['customerId'] = customerId
    this.saveToCustomerStorage()
  }

  isLoggedIn = () => {
    return this.getCustomerIdFromCookie() !== null
  }

  getCustomerIdFromCookie = () => {
    return this.customerStorage['customerId']
  }

  // verify if the 'customer' we got is the right data format
  getCustomerById = (id) => {
    return WooCommerce.get(`customers/${id}`)
      .then((response) => {
        const customer = new Customer(response.data)
        this.setCustomerIdToCookie(customer.id)
        return customer
      })
      .catch((error) => {
        console.log(error)
        return null
      })
  }

  logIn = (email) => {
    return WooCommerce.get('customers', {
      email: email,
      role: 'all'
    })
      .then((response) => {
        if (response.data.length > 0) {
          const customer = new Customer(response.data[0])
          this.setCustomerIdToCookie(customer.id)
          return customer
        } else {
          return null
        }
      })
      .catch((error) => {
        console.log(error)
        return null
      })
  }

  signUp = (data) => {
    return WooCommerce.post('customers', data)
      .then((response) => {
        const customer = new Customer(response.data[0])
        this.setCustomerIdToCookie(customer.id)
        return customer
      })
      .catch((error) => {
        console.log(error.response)
        return null
      })
  }

  logOut = () => {
    this.customerStorage['customerId'] = null
    this.saveToCustomerStorage()
  }
}

export default CustomerService