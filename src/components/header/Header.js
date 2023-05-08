import React from "react"
import "./Header.css"
import { ThemeProvider, createTheme, TextField, MenuItem } from "@mui/material"
import categories from "../../components/data/Category"

const Header = ({ setCategory, category, word, setWord }) => {
  const darkTheme = createTheme({
    primary: {
      main: "#fff"
    },
    type: "dark"
  })
  const handleChange = (language) => {
    setCategory(language)
    setWord("")
  }

  return (
    <div className='header'>
      <span className='title'>{word ? word : "Word hunt"}</span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
          <TextField
            className='search'
            id='filled-basic'
            label='Search a Word'
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            select
            className='select'
            label='Language'
            value={category}
            onChange={(e) => handleChange(e.target.value)}
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Header
