import React from 'react'
import { Navbar } from "../../components";
import { images } from '../../constants';
import './header.css'

const Header = () => {
  return (
    <header className="page-header">
    <div className="page-header_image">
      <img src={images.logo} alt="logo" />
    </div>
    <Navbar />
  </header>
  )
}

export default Header