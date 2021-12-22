import React, { useState, useCallback, useContext } from "react";
import {
  Cell,
  Grid,
  Row
} from '@material/react-layout-grid'
import Button from '@material/react-button'
import Select, { Option } from '@material/react-select'
import OnSalePriceString from './onSaleString'
import CartService from "../../../services/cartService";
import CartContext from "../../../context/cartContext";
import CartItemDetail from "../../../models/cartItemDetail";

const cartService = new CartService()

const ProductContentView = ({ product }) => {
  // UI status rather then submitted
  const [quantity, setQunatity] = useState(1)
  const [cartItemDetails, setCartItemDetails, mergeQuantityToCartItemsDetail] = useContext(CartContext)

  const selectQuantity = useCallback((e) => {
    const { value } = e.target
    setQunatity(value)
  }, [])

  // can add quantiity in cart into cookie within browser
  const addInCart = useCallback((e) => {
    const quantityForSubmit = parseInt(quantity)
    const newCartItemDetails = mergeQuantityToCartItemsDetail(
      cartItemDetails,
      product,
      quantityForSubmit
    )

    setCartItemDetails(newCartItemDetails)

    cartService.addIntoCart(product.id, quantityForSubmit)
    // window.location.replace('/products')
  })

  const priceElement = product.onsale ? <OnSalePriceString product={product} /> : (<>${product.price}</>)

  return (
    <Grid>
      <Row>
        <Cell
          desktopColumns={6}
          phoneColumns={4}
          tabletColumns={8}
        >
          <img
            src={product.imageUrl}
            style={{ width: '100%' }} />
        </Cell>
        <Cell
          desktopColumns={6}
          phoneColumns={4}
          tabletColumns={8}
        >
          <div style={{ padding: '12px 36px' }}>
            <h1>{product.name}</h1>
            <div dangerouslySetInnerHTML={{
              __html: product.description
            }}>
            </div>
            <div style={{ marginBottom: '16px' }}>
              {priceElement}
            </div>
            <div>
              <Select
                outlined
                label=''
                value={quantity}
                onChange={selectQuantity}
              >
                {
                  [1, 2, 3, 4, 5].map((number) => {
                    return (<Option key={number} value={number}>{number}</Option>)
                  })
                }
              </Select>
              <Button
                onClick={addInCart}
                style={{ margin: '0 16px' }}
                outlined
              >
                Add Into Cart
              </Button>
            </div>
          </div>
        </Cell>
      </Row>
    </Grid>
  )
}

export default ProductContentView