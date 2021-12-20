import React, { useState } from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import AppRoutes from './view/layout/appRoutes'
import Nav from './view/layout/nav'
import CartContext from './context/cartContext'

const App = () => {
  const [cartItemDetails, setCartItemDetails] = useState([])

  return (
    <CartContext.Provider value={[cartItemDetails, setCartItemDetails]}>
      <Router>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
        <Nav />
        <main className="mdc-top-app-bar--fixed-adjust">
          <AppRoutes />
        </main>
      </Router>
    </CartContext.Provider>
  )
}

export default App