import React from 'react'
import AboutImage from '../../assets/utsav5.jpg'
import MyCv from '../../assets/cv.pdf'
import { HiDownload } from 'react-icons/hi'
import Card from '../../components/Card'
import data from './data'
import './about.css'


const About = () => {
  return (
    <section id='about'>
      <div className='container about_container'>
        <div className='about_left'>
          <div className='about_portrait'>
            <img src={AboutImage} alt='' />
          </div>
  
        </div>
        <div className='about_right'>
          <h2> About Me</h2>
          <div className='about_cards'>
            {
              data.map(item => (
                <Card key={item.id} className='about_card'>
                <span className='about_card-icon'>{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
            <p>
            As a skilled React developer, you
             excel at crafting dynamic and intuitive
              user interfaces, leveraging your expertise
               in JavaScript and React to build elegant
                web applications that deliver exceptional
                 user experiences.
            </p>
            <p>
            As a skilled React developer, you
             excel at crafting dynamic and intuitive
              user interfaces, leveraging your expertise
               in JavaScript and React to build elegant
                web applications that deliver exceptional
                 user experiences.
            </p>
            
            <a href={MyCv}  download className='btn primary'> Download CV <HiDownload/>
            </a>
          
        </div>
      </div>
    </section>
  )
}

export default About