import React, { useState, useContext } from 'react'
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
import CartItemsPopUp from './cartItemsPopup';
import IsLogInContext from '../../context/isLoginContext';

const Nav = () => {
  const [open, setOpen] = useState(false)
  const [isLogin, setIsLogin] = useContext(IsLogInContext)

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
          {
            isLogin ? (
              <>
                <Link to="/orders">
                  <ListItem>Order Record</ListItem>
                </Link>
                <Link to="/logout">
                  <ListItem>Log Out</ListItem>
                </Link>
              </>) : (
              <>
                <Link to="/login">
                  <ListItem>Log In</ListItem>
                </Link>
                <Link to="/signup">
                  <ListItem>Sign Up</ListItem>
                </Link>
              </>

            )
          }
          {/* <Link to="/orders">
            <ListItem>Order Record</ListItem>
          </Link> */}

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
              ????????????
            </TopAppBarTitle>
          </TopAppBarSection>

          <TopAppBarSection align='end' role='toolbar'>
            <TopAppBarIcon tabIndex={0}>
              <div style={{ marginRight: '32px' }}>
                <CartItemsPopUp />
              </div>
            </TopAppBarIcon>
          </TopAppBarSection>

        </TopAppBarRow>
      </TopAppBar>
    </>
  )
}

export default Nav