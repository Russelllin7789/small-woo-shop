import React, { useState, useContext } from "react";
import { Cell, Grid, Row } from '@material/react-layout-grid'
import TextField, { Input } from '@material/react-text-field'
import Button from '@material/react-button'
import CustomerService from "../../services/customerService";
import IsLogInContext from "../../context/isLoginContext";

const customerService = new CustomerService()

function LogInPage() {
  const [uiStatus, setUIStatus] = useState({
    email: '',
    password: '',
    isLoading: false
  })

  const [isLogin, setIsLogin] = useContext(IsLogInContext)

  const typeInInput = (e) => {
    const { value, name } = e.target
    setUIStatus({ ...uiStatus, [name]: value })
  }

  const tryToLogin = async (e) => {
    setUIStatus({ ...uiStatus, isLoading: true })
    const result = await customerService.logIn(
      uiStatus.email,
      uiStatus.password
    )

    if (customerService.isLoggedIn()) {
      setIsLogin(customerService.isLoggedIn())
      window.location.replace('/')
    }
  }

  return (
    <Grid>
      <Row>
        <Cell desktopColumns={3} phoneColumns={0} tabletColumns={1}></Cell>
        <Cell desktopColumns={6} phoneColumns={4} tabletColumns={6}>
          <div style={{ padding: '80px 0px' }}>
            <h1 style={{ textAlign: 'center', paddingBottom: '24pxpx' }}>Sign In</h1>
            <div>
              <TextField
                outlined
                label='Login Email'
                style={{ width: '100%' }}
              >
                <Input
                  name='email'
                  type='email'
                  value={uiStatus.email}
                  onChange={typeInInput}
                />
              </TextField>
            </div>
            <br />
            <div>
              <TextField
                outlined
                label='Login Password'
                style={{ width: '100%' }}
              >
                <Input
                  name='password'
                  type='password'
                  value={uiStatus.password}
                  onChange={typeInInput}
                />
              </TextField>
            </div>
            <br />
            <br />
            {
              uiStatus.isLoading ? (<Button disabled={true}>Log In</Button>) : (<Button onClick={tryToLogin}>Log In</Button>)
            }
          </div>
        </Cell>
        <Cell desktopColumns={3} phoneColumns={0} tabletColumns={1}></Cell>
      </Row>
    </Grid>
  )

}

export default LogInPage