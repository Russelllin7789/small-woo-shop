import Cookies from "js-cookie";

const CART_KEY = 'cart'

class CartService {
  constructor() {
    // initialize cookies
    this.cart = Cookies.get(CART_KEY)
    if (this.cart === null) {
      this.cart = {}
      this.save()
    } else {
      this.cart = JSON.parse(this.cart)
    }
    console.log('cookies:', this.cart)
  }

  save = () => {
    Cookies.set(CART_KEY, this.cart)
  }

  getCartItem = (productId) => {
    const cartItem = this.cart[productId]
    if (!cartItem || !this.isCartItemValid(cartItem, productId)) {
      this.removeCartItem(productId)
      return
    }
    return cartItem
  }

  addIntoCart = (productId, quantity) => {
    const cartItem = this.getCartItem(productId) || { productId: productId, quantity: 0 }
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
    this.cart[productId] = null
  }

  isCartItemValid = (cartItem, productId) => {
    return !(cartItem.productId !== productId || cartItem.quantity <= 0)
  }
}

export default CartService