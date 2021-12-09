import React, { useState } from 'react'
import {
  Link,
} from 'react-router-dom';
import TopAppBar, {
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@material/react-top-app-bar';

import MaterialIcon from '@material/react-material-icon';
import Drawer from '@material/react-drawer';
import List, { ListItem } from '@material/react-list';

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Drawer
        modal
        open={open}
        onClose={() => {
          setOpen(false)
        }}
      >
        <List>
          <Link to="/">
            <ListItem>Home Page</ListItem>
          </Link>
          <Link to="/products">
            <ListItem>All Products</ListItem>
          </Link>
          <Link to="/cart">
            <ListItem>Cart</ListItem>
          </Link>
          <Link to="/orders">
            <ListItem>Order Record</ListItem>
          </Link>
        </List>
      </Drawer>
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection align='start'>
            <TopAppBarIcon navIcon tabIndex={0}>
              <MaterialIcon hasRipple icon='menu' onClick={
                () => {
                  setOpen(!open)
                }
              } />
            </TopAppBarIcon>
            <TopAppBarTitle>
              線上商城
            </TopAppBarTitle>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
    </>
  )
}

export default Nav