import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./popularMenu.css"
import { popularMenuFood } from "../../assets/fake-data/products"

const PopularMenu = () => {
  return (
    <section className=''>
      <Container>
        <Row>
          <h2>Popular food men</h2>
          {popularMenuFood.map((item) => (
            <Col lg='3' key={item.id}>
              <div className='single__product'>
                <div className='product__img'>
                  <img src={item.imgUrl} className='w-100' />
                </div>
                <div className='product__content'>
                  <div className='rating text-center'>
                    <span>
                      <i class='ri-star-line'></i>
                    </span>
                    <span>
                      <i class='ri-star-line'></i>
                    </span>
                    <span>
                      <i class='ri-star-line'></i>
                    </span>
                    <span>
                      <i class='ri-star-line'></i>
                    </span>
                    <span>
                      <i class='ri-star-line'></i>
                    </span>
                  </div>

                  <div className='d-flex align-items-center justify-content-between'>
                    <span className='price'>
                      Price:$
                      <span>
                        {item.price}
                        <span></span>
                        <span>
                          <button className='btn'>Add TO Cart</button>
                          <i class='ri-luggage-cart-fill'></i>
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default PopularMenu
