import Cookies from "js-cookie";

const CART_KEY = 'cart'

class CartService {
  constructor() {
    // initialize cookies
    this.cart = Cookies.get(CART_KEY)
    // console.log('cookies:', this.cart)
    if (this.cart == null || this.cart == {}) {
      this.cart = {}
      this.save()
    } else {
      this.cart = JSON.parse(this.cart)
    }
    console.log('cookies:', this.cart)
  }

  static createCartItem = (productId, quantity = 0) => {
    return {
      productId: productId,
      quantity: quantity
    }
  }

  save = () => {
    // save this cart as pure text
    Cookies.set(CART_KEY, JSON.stringify(this.cart))
  }

  getCartItem = (productId) => {
    const productIdKey = parseInt(productId)
    const cartItem = this.cart[productIdKey]
    if (!cartItem || !this.isCartItemValid(cartItem, productIdKey)) {
      this.removeCartItem(productIdKey)
      return
    }
    return cartItem
  }

  getCartItems = () => {
    return Object.keys(this.cart).map((productId) => {
      return this.getCartItem(productId)
    })
  }

  addIntoCart = (productId, quantity) => {
    // change the initialization way
    // const cartItem = this.getCartItem(productId) || { productId: productId, quantity: 0 }
    const cartItem = this.getCartItem(productId) || CartService.createCartItem(productId, 0)
    cartItem.quantity += Math.max(1, quantity)
    this.updateCartItem(cartItem)
  }

  updateCartItem = (cartItem) => {
    const { productId } = cartItem

    // since data is saved via cookies under client browser, it's necessary to examine whether data is valid or not
    if (this.isCartItemValid(cartItem, productId)) {
      this.cart[productId] = cartItem
      this.save()
    }
  }

  removeCartItem = (productId) => {
    console.log('product id:', productId)
    this.cart[productId] = null
    this.save()
  }

  isCartItemValid = (cartItem, productId) => {
    return !(cartItem.productId !== productId || cartItem.quantity <= 0)
  }
}

export default CartService