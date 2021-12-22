import React, { useContext, useMemo } from "react";
import List, {
  ListGroup,
  ListGroupSubheader,
  ListItem,
  ListItemGraphic,
  ListItemMeta
} from '@material/react-list';
import MaterialIcon from '@material/react-material-icon';
import Select, { Option } from '@material/react-select';
import CartContext from '../../../context/cartContext'
import CartService from "../../../services/cartService";

const cartService = new CartService()

const QuantitySelector = ({ label, value, onChange }) => {
  // const valueArray = Array.from(Array(100).keys()).map(x => x + 1)
  const valueArray = useMemo(
    () => {
      let tempArray = Array.from(Array(101).keys())
      tempArray.shift()
      return tempArray
    }, [])

  return (
    <Select
      outlined
      label={label}
      value={value}
      onChange={onChange}
    >
      {
        valueArray.map((number) => {
          return (<Option key={number} value={number}>{number}</Option>)
        })
      }
    </Select>
  )
}

const CartItemsList = () => {
  // const cartItems = []
  const [cartItemDetails, setcartItemDetails] = useContext(CartContext)
  return (
    <div>
      <List avatarList twoLine>
        <ListGroup>
          <ListGroupSubheader tag='h2'>
            購物車商品
          </ListGroupSubheader>
          {
            cartItemDetails.map((cartItem) => {
              const { product, quantity } = cartItem
              return (
                <>
                  <ListItem
                    activated={false}
                    key={product.id}
                    style={{ height: '88px', padding: '8px 16px' }}
                  >
                    <ListItemGraphic
                      graphic={
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          style={{ width: '80px', height: '80px' }}
                        />}
                    />
                    <span className='mdc-list-item__text'>
                      <span className='mdc-list-item__primary-text'>
                        {product.name}
                      </span>
                      <span className='mdc-list-item__secondary-text'>
                        Other Info...
                      </span>
                    </span>
                    <ListItemMeta meta='' />
                    <QuantitySelector
                      value={quantity}
                      onChange={
                        (e) => { }
                      }
                    />
                    <MaterialIcon icon='delete' style={{ marginLeft: '16px' }} onClick={() => { }} />
                  </ListItem>
                  <hr />
                </>
              )
            })
          }
        </ListGroup>
      </List>
    </div>
  )
}

export default CartItemsList