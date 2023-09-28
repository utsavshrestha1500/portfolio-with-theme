import React from 'react'
import HeaderImage from '../../assets/utsav7.jpg'
import data from '../header/data'
import './header.css'

const Header = () => {
  return (
    <header id='header'>
      <div className='container header_container'>
        <div className='header_profile'>
          <img src={HeaderImage} alt='Header Portait' />
        </div>
        <h3> Development</h3>
        <p>Eliminate English grammar errors instantly
         and enhance your writing. Try now for free! 
         Our free sentence checker allows you to write
          your best wherever you love to write
         </p>
         <div className='header_cta'>
          <a href='#contact' className='btn primary'>Let's Talk</a>
          
          <a href='#portfolio' className='btn light'>My Work</a>
         </div>
         <div className='header_socials'>
          {
            data.map(item => <a key={item.id} href={item.link}
             target='_blank' rel='noopener noreferrer'>{item.icon}
             </a>)
          }
         </div>
      </div>
    </header>
  )
}

export default Header