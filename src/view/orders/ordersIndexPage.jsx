import React, { useRef, useState, useEffect, useMemo } from "react";
import Card, {
  CardPrimaryContent,
  CardActions,
  CardActionButtons,
} from '@material/react-card'
import {
  Cell,
  Grid,
  Row
} from '@material/react-layout-grid'
import Button from '@material/react-button'
import {
  Link
} from 'react-router-dom'

import LoadingView from '../layout/loadingView'
import OrderService from "../../services/orderService";

const orderService = new OrderService()

const OrdersContentView = ({ orders }) => {
  return (
    <Grid>
      <Row>
        {
          orders.map((order) => {
            const url = `/orders/${order.id}`
            return (
              <Cell
                key={order.id}
                desktopColumns={3}
                tabletColumns={4}
                phoneColumns={4}
              >
                <Card>
                  <CardPrimaryContent>
                    <div style={{ padding: '16px' }}>
                      <h1>Order Number: {order.id}</h1>
                      <h4>Order Status: {order.status}</h4>
                      <p>Order Date: {order.dateCreated}</p>
                    </div>
                  </CardPrimaryContent>
                  <CardActions>
                    <CardActionButtons>
                      <Link to={url}>
                        <Button>Details</Button>
                      </Link>
                    </CardActionButtons>
                  </CardActions>
                </Card>
              </Cell>
            )
          })
        }
      </Row>
    </Grid>
  )
}

const OrdersIndexPage = () => {
  const isInited = useRef(false)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const loadFunc = async () => {
      const result = await orderService.getOrders()
      isInited.current = true
      setOrders(result)
    }

    loadFunc()
  }, [orderService])

  const initFlag = isInited.current
  // use 'useMemo' to test if program get more proficient
  const contentView = useMemo(() => {
    if (initFlag) {
      return (<OrdersContentView orders={orders} />)
    } else {
      return (<LoadingView />)
    }
  })

  return (
    <div style={{ maxWidth: '1200px', margin: 'auto' }}>
      {contentView}
    </div>
  )
}

export default OrdersIndexPage