import React from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import AppRoutes from './view/layout/appRoutes'
import Nav from './view/layout/nav'

const App = () => {
  return (
    <Router>
      <Nav />
      <main className="mdc-top-app-bar--fixed-adjust">
        <AppRoutes />
      </main>
    </Router>
  )
}

export default App