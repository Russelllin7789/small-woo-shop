import React, { useState, useContext, useEffect } from "react";
import Button from '@material/react-button'
import CartContext from "../../context/cartContext";
import OrderService from "../../services/orderService";

const orderService = new OrderService()

const data = {
  payment_method: "bacs",
  payment_method_title: "Direct Bank Transfer",
  set_paid: true,
  billing: {
    first_name: "Russell",
    last_name: "Lin",
    address_1: "大同區承德路三段",
    address_2: "",
    city: "Taipei",
    state: "Taiwan",
    postcode: "103",
    country: "TW",
    email: "john.doe@example.com",
    phone: "0988123456"
  },
  shipping: {
    first_name: "Russell",
    last_name: "Lin",
    address_1: "大同區承德路三段",
    address_2: "",
    city: "Taipei",
    state: "Taiwan",
    postcode: "103",
    country: "TW"
  },
  line_items: [],
  shipping_lines: [
    {
      method_id: "flat_rate",
      method_title: "Flat Rate",
      total: "10.00"
    }
  ]
};

const CheckoutPage = () => {
  const [submitting, setSubmitting] = useState(false)
  const [cartItemDetails] = useContext(CartContext)
  const { shipping } = data
  const buttonText = (submitting) ? '結帳中，請稍候...' : '去結帳'

  data.line_items = cartItemDetails.map((item) => {
    return {
      product_id: item.product.id,
      quantity: item.quantity
    }
  })

  useEffect(() => {
    orderService.getPaymentGateways()
    orderService.getShippingMethods()
  }, [])

  return (
    <div style={{ margin: 'auto', maxWidth: '1200px', textAlign: 'center' }}>
      <h1>地址</h1>
      <p>{data.last_name}{data.first_name}</p>
      <p>{data.email}</p>
      <p>{shipping.postcode}{shipping.country}{shipping.state}</p>
      <p>{data.payment_method_title}</p>
      <p>{data.shipping_lines[0].method_title}</p>
      <Button outlined onClick={
        (e) => {
          setSubmitting(true)
          orderService.submitOrder(data)
        }
      }
        disabled={submitting}
      > {buttonText}
      </Button>
    </div>
  )
}

export default CheckoutPage