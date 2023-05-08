import React from "react"
import { FcDribbble } from "react-icons/fc"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import "./Header.css"



const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href='https://linkedin.com' target='_blank'>
        <FaGithub />
      </a>
      <a href='https://github.com' target='_blank'>
        {" "}
        <FaLinkedin />
      </a>
      <a href='https://dribbble.com' target='_blank'>
        <FcDribbble />
      </a>
    </div>
  )
}

export default HeaderSocials
