import React from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import HomePage from './view/home/homePage'
import Nav from './view/layout/nav'

const App = () => {
  return (
    <Router>
      <Nav />
      <main className="mdc-top-app-bar--fixed-adjust">
        <div className="App">
          <HomePage />
        </div>
      </main>
    </Router>
  )
}

export default App