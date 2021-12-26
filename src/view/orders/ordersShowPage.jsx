import React, { useEffect, useRef, useState, useMemo } from "react";
import Button from '@material/react-button'
import {
  useParams,
  Link,
  Navigate
} from 'react-router-dom'

import OrderService from "../../services/orderService";
import ProductService from '../../services/productService'
import LoadingView from "../layout/loadingView";

const orderService = new OrderService()
const productService = new ProductService()

const OrderContentView = ({ order }) => {
  console.log('order here:', order)
  const isInited = useRef(false)
  const [orderItems, setOrderItems] = useState([])

  useEffect(() => {
    const loadFunc = async () => {
      const products = await productService.getProductsByIds(order.productIds)
      console.log('products:', products)
      isInited.current = true
      const newOrderItems = order.items.map((item) => {
        for (const product of products) {
          if (`${item.productId}` === `${product.id}`) {
            return item.bindProduct(product)
          }
        }

        return null
      }).filter(x => x)

      setOrderItems(newOrderItems)
    }
    loadFunc()
  }, [order.items])

  return (
    <div style={{ margin: 'auto', padding: '48px 0', textAlign: 'center', maxWidth: '1200px' }}>
      <h1>Order Number: {order.id}</h1>
      <br />
      <p>Order Status: {order.status}</p>
      <p>Order Created Time: {order.dateCreated}</p>
      <p>Total Price: {order.currency}{order.total}</p>
      <p>Order Address: {order.fullAddress}</p>
      <br />
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {
          orderItems.map((orderItem) => {
            const imageUrl = orderItem.imageUrl
            const alt = `${orderItem.name}_image`
            return (
              <li key={orderItem.id}>
                <div>
                  <img src={imageUrl} alt={alt} style={{ width: '48px', height: '48px', verticalAlign: 'middle', marginRight: '16px' }} />
                  <span style={{ lineHeight: '48px', height: '48px' }}>{orderItem.name} : {orderItem.quantity} X {orderItem.price}</span>
                </div>
              </li>
            )
          })
        }
      </ul>
      <div style={{ paddingTop: '64px' }}>
        <Link to='/orders'>
          <Button>All Orders</Button>
        </Link>
      </div>
      <div style={{ paddingTop: '64px' }}>
        <Link to='/'>
          Back to Home Page
        </Link>
      </div>
    </div>
  )
}

const OrderShowPage = () => {
  const { id } = useParams()
  const isInited = useRef(false)
  const [order, setOrder] = useState({})

  useEffect(() => {
    const loadFunc = async () => {
      const result = await orderService.getOrder(id)
      isInited.current = true
      setOrder(result)
    }

    loadFunc()
  }, [id])

  const initFlag = isInited.current
  const contentView = useMemo(() => {
    if (initFlag) {
      if (order) {
        return (<OrderContentView order={order} />)
      } else {
        return (<Navigate to='/' />)
      }
    } else {
      return (<LoadingView />)
    }
  }, [order, initFlag])

  return contentView
}

export default OrderShowPage