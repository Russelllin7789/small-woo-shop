import shopModel from './shopModel'

class Product extends shopModel {
  get name() {
    return this.getValue('name')
  }

  get shortDescription() {
    return this.getValue('short_description')
  }

  get description() {
    return this.getValue('description')
  }

  get price() {
    return this.getValue('price')
  }

  get regularPrice() {
    return this.getValue('regular_price')
  }

  get onsale() {
    return this.getValue('on_sale')
  }

  get imageUrl() {
    // return this.getValue('images')[0].src

    const images = this.getValue('images')
    if (images && images.length > 0) {
      return images[0].src
    }

    return ''
  }

  get productName() {
    return this.getValue('name')
  }

  get productId() {
    return this.getValue('id')
  }
}

export default Product