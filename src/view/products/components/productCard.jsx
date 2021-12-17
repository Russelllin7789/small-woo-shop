import React from "react";
import { Link } from 'react-router-dom';
import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
} from '@material/react-card';
import Button from '@material/react-button';
import OnSalePriceString from './onSaleString'

// const OnSalePriceString = ({ product }) => {
//   return (
//     <>
//       <del style={{ color: 'red' }}>
//         {product.regularPrice}
//       </del> <b>${product.price}</b>
//     </>
//   )
// }

const ProductCard = ({ product }) => {
  const url = `/products/${product.id}`
  const priceElement = product.onSale ? <OnSalePriceString product={product} /> : (<>${product.price}</>)

  return (
    <Link to={url}>
      <Card outlined className="productCard">
        <CardMedia
          square
          imageUrl={product.images[0].src}
        />
        <CardPrimaryContent>
          <div style={{ padding: '0px 16px' }}>
            <p className="title">{product.name}</p>
            <p className="desc" dangerouslySetInnerHTML={{ __html: product.description }}></p>
          </div>
        </CardPrimaryContent>
        <CardActions>
          <CardActionButtons>
            <Button>{priceElement}</Button>
          </CardActionButtons>
        </CardActions>
      </Card>
    </Link>
  )
}

export default ProductCard