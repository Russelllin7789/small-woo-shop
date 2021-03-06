import React, { useContext } from 'react'
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import HomePage from '../home/homePage'
import ProductsShowPage from '../products/productsShowPage'
import ProductsIndexPage from '../products/productsIndexPage'
import OrdersIndexPage from '../orders/ordersIndexPage'
import OrdersShowPage from '../orders/ordersShowPage'
import OrdersSuccessPage from '../orders/orderSuccessPage'
import OrdersFailedPage from '../orders/orderFailedPage'
import CartIndexPage from '../../view/cart/cartIndexPage'
import CheckoutPage from '../../view/cart/checkoutPage'
import CustomerLoginPage from '../customer/logInPage'
import CustomerSignupPage from '../customer/signUpPage'
import NoMatch from '../errors/404'

import IsLogInContext from '../../context/isLoginContext';
import CustomerService from '../../services/customerService';

const customerService = new CustomerService()

const AppRoutes = () => {
  const [isLogin, setIsLogin] = useContext(IsLogInContext)
  const logOut = () => {
    customerService.logOut()
    setIsLogin(false)
    return <Navigate to='/' />
  }

  return (
    <Routes>
      <Route path='/' exact element={<HomePage />}>
      </Route>
      <Route path='/products' exact element={<ProductsIndexPage />}>
      </Route>
      <Route path='/products/:id' exact element={<ProductsShowPage />}>
      </Route>
      <Route path='/orders' exact element={<OrdersIndexPage />}>
      </Route>
      <Route path='/orders/failed' exact element={<OrdersFailedPage />}>
      </Route>
      <Route path='/orders/:id' exact element={<OrdersShowPage />}>
      </Route>
      <Route path='/orders/:id/success' exact element={<OrdersSuccessPage />}>
      </Route>
      <Route path='/cart' exact element={<CartIndexPage />}>
      </Route>
      <Route path='/checkout' exact element={<CheckoutPage />}>
      </Route>
      <Route path='/login' exact element={<CustomerLoginPage />}>
      </Route>
      <Route path='/signup' exact element={<CustomerSignupPage />}>
      </Route>
      {/* <Route
        path='/logout' exact
        render={() => {
          customerService.logOut()
          setIsLogin(false)
          return <Navigate to='/' />
        }
        } /> */}
      <Route path='/logout' exact element={logOut()}>
      </Route>
      <Route path='*' element={<NoMatch />}>
      </Route>
    </Routes>
  )
}

export default AppRoutes

