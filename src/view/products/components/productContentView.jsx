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

  const addInCart = useCallback((e) => {
    console.log('added!')
  })

  return (
    <Grid>
      <Row>
        <Cell></Cell>
      </Row>
    </Grid>
  )
}

export default ProductContentView