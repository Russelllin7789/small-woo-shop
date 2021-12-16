import React, { useState, useCallback } from "react";
import {
  Cell,
  Grid,
  Row
} from '@material/react-layout-grid'
import Button from '@material/react-button'
import Select, { Option } from '@material/react-select'

const ProductContentView = ({ product }) => {
  // UI status rather then submitted
  const [quantity, setQunatity] = useState(1)

  const selectQuantity = useCallback((e) => {
    const { value } = e.target
    setQunatity(value)
  }, [])

  // can add quantiity in cart into cookie within browser
  const addInCart = useCallback((e) => {
    console.log('added!')
  })

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
      </Row>
    </Grid>
  )
}

export default ProductContentView