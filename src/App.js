import React from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import AppRoutes from './view/layout/appRoutes'
import Nav from './view/layout/nav'

const CartContext = React.createContext([])

const App = () => {
  return (
    <CartContext.Provider value={[]}>
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