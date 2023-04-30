import React, { Fragment } from "react"
import Header from "../components/header/Header"
import PopularMenu from "../components/popular-menu/PopularMenu"
import MenuPack from "../components/menu-pack/MenuPack"

const home = () => {
  return (
    <Fragment>
      <Header />
      <section>
        <PopularMenu />
      </section>
      <section>
        <MenuPack />
      </section>
    </Fragment>
  )
}

export default home
