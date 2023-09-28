import React from 'react'
import Logo from '../../assets/utsavnew.jpg'
import './navbar.css'
import data from './data'
import { IoIosColorPalette } from 'react-icons/io'

const Navbar = () => {
  return (
    <nav>
      <div className='container nav_container'>
        <a href='index.html' className='nav_logo'>
          <img src={Logo} alt='' />
        </a>
        <ul className='nav_menu'>
          {
            data.map(item => <li key={item.id}> <a href={item.link}>
            {item.title}</a></li>)
          }
        </ul>
        <button id='theme_button'> <IoIosColorPalette/></button>
      </div>
    </nav>
  )
}

export default Navbar