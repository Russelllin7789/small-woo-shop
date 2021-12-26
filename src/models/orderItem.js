import shopModel from "./shopModel";

class OrderItem extends shopModel {
  bindProduct = (product) => {
    if (`${this.productId}` === `${product.id}`) {
      this._product = product
    }

    return this
  }

  get quantity() {
    return this.getValue('quantity')
  }

  get productId() {
    return this.getValue('product_id')
  }

  get price() {
    return this.getValue('price')
  }

  get name() {
    return this.getValue('name')
  }

  get product() {
    return this._product || null
  }

  get imageUrl() {
    return this.product ? this.product.imageUrl : 'https://via.placeholder.com/48x48'
  }
}

export default OrderItem