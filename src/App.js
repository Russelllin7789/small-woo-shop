import React, { useState } from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import AppRoutes from './view/layout/appRoutes'
import Nav from './view/layout/nav'
import CartContext from './context/cartContext'
import IsLogInContext from './context/isLoginContext'
import CartService from './services/cartService';
import CustomerService from './services/customerService';
import CartItemDetail from './models/cartItemDetail';

const cartService = new CartService()
const customerService = new CustomerService()

const mergeQuantityToCartItemsDetail = (
  cartItemDetails,
  product,
  quantity,
  append = true
) => {
  const quantityForSubmit = Number.parseInt(quantity)
  if (cartService.getCartItem(product.id)) {
    return cartItemDetails.map((item) => {
      if (item.product.id === product.id) {
        if (append) {
          return new CartItemDetail(product, item.quantity + quantityForSubmit)
        } else {
          return new CartItemDetail(product, quantityForSubmit)
        }
      } else {
        return item
      }
    })
  } else {
    return [
      ...cartItemDetails,
      new CartItemDetail(product, quantityForSubmit)
    ]
  }
}

const App = () => {
  const [cartItemDetails, setCartItemDetails] = useState([])
  const [isLogIn, setIsLogIn] = useState(customerService.isLoggedIn)

  return (
    <IsLogInContext.Provider value={[isLogIn, setIsLogIn]}>
      <CartContext.Provider value={[cartItemDetails, setCartItemDetails, mergeQuantityToCartItemsDetail]}>
        <Router>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"></link>
          <Nav />
          <main className="mdc-top-app-bar--fixed-adjust">
            <AppRoutes />
          </main>
        </Router>
      </CartContext.Provider>
    </IsLogInContext.Provider>
  )
}

export default App