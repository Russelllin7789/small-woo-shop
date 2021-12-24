import React, { useState, useEffect } from "react";
import Button from '@material/react-button'
import CartItemsList from './component/cartItemsList'
import CartContext from "../../context/cartContext";

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
  const { shipping } = data
  const buttonText = (submitting) ? '結帳中，請稍候...' : '去結帳'

  // useEffect(() => {
  //   if (submitting) {
  //     console.log('send!')
  //   }
  // }, [submitting])

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
          console.log('send!')
        }
      }
        disabled={submitting}
      > {buttonText}
      </Button>
    </div>
  )
}

export default CheckoutPage