import React, { useState, useContext } from "react";
import { Cell, Grid, Row } from '@material/react-layout-grid'
import TextField, { Input } from '@material/react-text-field'
import Button from '@material/react-button'
import CustomerService from "../../services/customerService";

const customerService = new CustomerService()

function LogInPage() {
  const [uiStatus, setUIStatus] = useState({
    email: '',
    password: '',
    isLoading: false
  })

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
  }

  return (
    <Grid>
      <Row>
        <Cell></Cell>
        <Cell>
          <div style={{ padding: '80px 0px' }}>
            <h1 style={{ textAlign: 'center', paddingBottom: '24pxpx' }}></h1>
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
        <Cell></Cell>
      </Row>
    </Grid>
  )

}

export default LogInPage