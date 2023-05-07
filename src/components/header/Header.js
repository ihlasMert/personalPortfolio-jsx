import React from "react"
import "./Header.css"
import { ThemeProvider, createTheme, TextField, MenuItem } from "@mui/material"

const Header = () => {
  const darkTheme = createTheme({
    primary: {
      main: "#fff"
    },
    type: "dark"
  })

  return (
    <div className='header'>
      <span className='title'>Word Hunt</span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
          <TextField id='standard-basic' label='Standard' />
          <TextField
            id='standard-basic'
            label='Select'
            select
            helperText='Please select your currency'
          >
            <MenuItem>english</MenuItem>
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Header
