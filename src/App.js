import React, { useEffect, useState } from "react"
import axios from "axios"
import { Container } from "@mui/material"
import Header from "./components/Header/Header"
import Definations from "./components/Definations/Definations"

const App = () => {
  const [word, setWord] = useState("")
  const [meanings, setMeanings] = useState([])
  const [category, setCategory] = useState("en")

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      )
      console.log(data)
      setMeanings(data.data)
    } catch (error) {
      console.log(error)
    }
  }
/*   console.log(meanings) */

  useEffect(() => {
    dictionaryApi()
  }, [word, category])
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
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
      {meanings &&  (<Definations word={word} meanings={meanings} categur={category} />)}
      </Container>
    </div>
  )
}

export default App
