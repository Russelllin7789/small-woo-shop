import React from "react";
import {
  Link
} from 'react-router-dom'

const OrdersFailedPage = () => {
  return (
    <div style={{ padding: '88px 0', textAlign: 'center' }}>
      <h1>This order was failed! T______T</h1>
      <div style={{ paddingTop: '128px' }}>
        <Link to='/'>
          Back to HomePage
        </Link>
      </div>
    </div>
  )
}

export default OrdersFailedPage