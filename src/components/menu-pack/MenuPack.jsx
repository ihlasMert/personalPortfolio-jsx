import React, { useEffect, useState } from "react"
import { Container, Row, Col } from "reactstrap"
import {
  fastFoodProducts,
  riceMenuProducts,
  pizzaProducts,
  dessertProducts,
  coffeeProducts
} from "../../assets/fake-data/products"
import PopularMenu from "../popular-menu/PopularMenu"

const MenuPack = () => {
  const [filter, setFilter] = useState("RİCE-MENU")
  const [products, setProducts] = useState(riceMenuProducts)

  useEffect(() => {
    if (filter === "RİCE-MENU") {
      setProducts(riceMenuProducts)
    }
    if (filter === "FAST-FOOD") {
      setProducts(fastFoodProducts)
    }
    if (filter === "PIZZA") {
      setProducts(pizzaProducts)
    }
    if (filter === "DESSERT") {
      setProducts(dessertProducts)
    }
    if (filter === "COFFEE") {
      setProducts(coffeeProducts)
    }
  }, [filter])

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-4'>
            <h3>Our Menu Pack</h3>
          </Col>
          <Col lg='12' className='text-center mb-4'>
            <button className='btn' onClick={() => setFilter("FAST-FOOD")}>
              Fast Food
            </button>
            <button className='btn' onClick={() => setFilter("RİCE-MENU")}>
              Rice Menu
            </button>
            <button className='btn' onClick={() => setFilter("PIZZA")}>
              Pizza
            </button>
            <button className='btn' onClick={() => setFilter("DESSERT")}>
              Desserts
            </button>
            <button className='btn' onClick={() => setFilter("COFFEE")}>
              Coffee
            </button>
          </Col>

          {products.map((item) => (
            <Col lg='3' key={item.id} className='mb-4 '>
              <PopularMenu item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default MenuPack
