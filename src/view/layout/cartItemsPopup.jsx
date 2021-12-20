import React, { useState, useEffect } from "react";
import {
  Link
} from 'react-router-dom'
import MenuSurface, { Corner } from '@material/react-menu-surface'
import MaterialIcon from '@material/react-material-icon';
import Button from '@material/react-button'
import { Chip } from '@material/react-chips'

import CartItemDetail from '../../models/cartItemDetail'

import CartService from "../../services/cartService";
import ProductService from "../../services/productService";

const cartService = new CartService()
const productService = new ProductService()

const CartItemsPopUp = () => {
  const [open, setOpen] = useState(false)
  // set anchor for menu element to show
  const [anchorElement, setAnchorElement] = useState(null)
  const [cartItemDetails, setCartItemDetails] = useState([])

  const total = cartItemDetails.reduce((sum, item) => {
    return sum += item.quantity
  }, 0)

  useEffect(() => {
    const loadCartItemsDetail = async () => {
      const cartItems = cartService.getCartItems()

      if (cartItems && cartItems.length > 0) {
        const productIds = cartItems.map((cartItem) => {
          return cartItem.productId
        })
        const products = await productService.getProductByIds(productIds)
        const result = products.map((product) => {
          const cartItem = cartService.getCartItem(product.id)
          if (!cartItem) {
            return null
          }

          return new CartItemDetail(product, cartItem.quantity)
        }).filter(x => x)
        // filter will filter out those values that are equivalent with 'false'

        console.log('results:', result)
        setCartItemDetails(result)
      }
    }

    loadCartItemsDetail()
  }, [productService])

  return (
    <div
      className='mdc-menu-surface--anchor'
      ref={setAnchorElement}
    >
      <Chip
        label={total}
        leadingIcon={<MaterialIcon icon='shopping_cart' />}
        onClick={() => setOpen(true)}
      />
      <MenuSurface
        open={open}
        anchorCorner={Corner.BOTTOM_END}
        onClose={() => setOpen(false)}
        anchorElement={anchorElement}
      >
        <div style={{ padding: '8px 16px' }}>
          <p>購物車商品：</p>
          {
            cartItemDetails.map((item) => {
              return (<p key={item.product.id}>
                {item.product.name} x {item.quantity}
              </p>)
            })
          }
          <hr />
          <Link to="/cart">
            <Button outlined>結帳</Button>
          </Link>
        </div>
      </MenuSurface>
    </div>
  )
}

export default CartItemsPopUp