import React, { useState, useContext } from "react";
import { Cell, Grid, Row } from '@material/react-layout-grid'
import TextField, { Input } from '@material/react-text-field'
import Button from '@material/react-button'

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

}

export default LogInPage