import React, { useEffect, useState } from "react"
import axios from "axios"
import { Container } from "@mui/material"
import Header from "./components/Header/Header"

const App = () => {
  const [word, setWord] = useState("")
  const [meanings, setMeanings] = useState([])

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
      )
      console.log(data)
      setMeanings(data.data)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(meanings)

  useEffect(() => {
    dictionaryApi()
  }, [])
  return (
    <div
      className='app'
      style={{ height: "100vh", backgroundColor: "#282c32", color: "#fff" }}
    >
      <Container
        maxWidth='md'
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          backgroundColor: "#282c32ack"
        }}
      >
        <Header/>
      </Container>
    </div>
  )
}

export default App
