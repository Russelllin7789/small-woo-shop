import React from 'react'
import ProductsIndexPage from '../products/productsIndexPage';
// import Woo from '../../Woo'
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

// const WooCommerce = new WooCommerceRestApi({
//   url: 'http://localhost:8888/',
//   consumerKey: 'ck_98e50c0bbe1677f6b81ded7b5e00e8dfe09fdb60',
//   consumerSecret: 'cs_d4ea54a6da5ab2f5fae1e204bf3a95b00aa23497',
//   version: 'wc/v3'
// })

// const woo = new Woo('ck_98e50c0bbe1677f6b81ded7b5e00e8dfe09fdb60', 'cs_d4ea54a6da5ab2f5fae1e204bf3a95b00aa23497')

const HomePage = () => {

  // const [products, setProducts] = useState([])

  // useEffect(() => {
  //   woo.request('http://localhost:8888/wp-json/wc/v3/products', 'get')
  //     .then((data) => {
  //       setProducts(data)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // })

  // useEffect(() => {
  //   WooCommerce.get("products")
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data);
  //     });
  // }, [])
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Home Page</h1>
      <ProductsIndexPage />
    </div>
  );
}

export default HomePage;
