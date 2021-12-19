import shopModel from "./shopModel";

class CartItemDetail extends shopModel {
  constructor(product, quantity) {
    super({
      product: product,
      quantity: quantity
    })
  }

  get product() {
    return this.getValue('product')
  }

  get quantity() {
    return this.getValue('quantity')
  }
}

export default CartItemDetail