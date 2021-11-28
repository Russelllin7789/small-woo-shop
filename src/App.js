import React, { useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

const WooCommerce = new WooCommerceRestApi({
  url: 'http://localhost:8888/',
  consumerKey: 'ck_98e50c0bbe1677f6b81ded7b5e00e8dfe09fdb60',
  consumerSecret: 'cs_d4ea54a6da5ab2f5fae1e204bf3a95b00aa23497',
  version: 'wc/v3'
})

function App() {
  useEffect(() => {
    WooCommerce.get("products")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [])
  return (
    <div className="App">
      <p>Learn React</p>
    </div>
  );
}

export default App;
