import React from "react";
import { Link } from 'react-router-dom';
import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
} from '@material/react-card';
import Button from '@material/react-button';

const ProductCard = ({ product }) => {
  const url = `/products/${product.id}`
  return (
    <Link to={url}>
      <Card outlined className="productCard">
        <CardMedia
          square
          imageUrl="https://via.placeholder.com/600x450"
        />
        <CardPrimaryContent>
          <div style={{ padding: '0px 16px' }}>
            <p className="title">title</p>
            <p className="desc">description</p>
            {product.id}
          </div>
        </CardPrimaryContent>
        <CardActions>
          <CardActionButtons>
            <Button>price</Button>
          </CardActionButtons>
        </CardActions>
      </Card>
    </Link>
  )
}

export default ProductCard