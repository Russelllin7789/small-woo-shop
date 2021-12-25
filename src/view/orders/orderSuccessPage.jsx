import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  useParams,
  Navigate,
  Link
} from "react-router-dom";
import Button from '@material/react-button'

import LoadingView from '../../view/layout/loadingView'
import OrderService from "../../services/orderService";

const orderService = new OrderService()

const OrderSuccessContentView = ({ order }) => {
  return (
    <div style={{ padding: '88px, 0', textAlign: 'center' }}>
      <h1>Order Success!</h1>
      <div>
        The Order number is <Link to={`/orders/${order.id}`}>{order.id}</Link>
      </div>
      <div style={{ paddingTop: '64px' }}>
        <Link to='/orders'>
          <Button outlined>All Orders</Button>
        </Link>
      </div>
      <div style={{ paddingTop: '128px' }}>
        <Link to='/'>
          Back to Home Page
        </Link>
      </div>
    </div>
  )
}

const OrderSuccessPage = () => {
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
  }, [])

  const initFlag = isInited.current
  const contentView = useMemo(() => {
    if (initFlag) {
      if (order) {
        return (<OrderSuccessContentView order={order} />)
      } else {
        return (<Navigate to='/' />)
      }
    } else {
      return (<LoadingView />)
    }
  }, [order, initFlag])

  return contentView
}

export default OrderSuccessPage