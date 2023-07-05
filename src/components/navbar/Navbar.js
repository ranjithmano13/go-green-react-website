import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <nav className='nav-bar'>
        <ul className='nav-bar-list'>
            <li><a>Home</a></li>
            <li><a>About Us</a></li>
            <li><a>Go Renewble</a></li>
            <li><a>Blog</a></li>
            <li><a>Contribute</a></li>
        </ul>
            <button className='sign-up-button'>Subscribe</button>
    </nav>
  )
}

export default Navbar