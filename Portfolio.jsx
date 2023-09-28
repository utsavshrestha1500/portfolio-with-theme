import React, { useState, useEffect } from 'react';
import { backendData, frontendData, uiUxData } from './data'; 
import Card from '../../components/Card'
import './portfolio.css'

const Portfolio = () => {
  const filterProjects = (category) => {
    setSelectedCategory(category);
  };
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredData, setFilteredData] = useState([]);

  // Filter data when selectedCategory changes
  useEffect(() => {
    switch (selectedCategory) {
      case 'All':
        setFilteredData([...backendData, ...frontendData, ...uiUxData]);
        break;
      case 'Backend':
        setFilteredData(backendData);
        break;
      case 'Frontend':
        setFilteredData(frontendData);
        break;
      case 'UI/UX':
        setFilteredData(uiUxData);
        break;
      default:
        setFilteredData([]);
    }
  }, [selectedCategory]);

  return (
    <section id='portfolio'>
     <h2> Portfolio</h2>
     <p> You can review my projects done in different fields.</p>

     <div className='nav-item'>
        <ul>
          <li>
            <h5 onClick={() => filterProjects('All')} className={selectedCategory === 'All' ? 'btn primary' : 'btn light'}>
              All Work
            </h5>
          </li>
          <li>
            <h5 onClick={() => filterProjects('Backend')} className={selectedCategory === 'Backend' ? 'btn primary' : 'btn light'}>
              Backend
            </h5>
          </li>
          <li>
            <h5 onClick={() => filterProjects('Frontend')} className={selectedCategory === 'Frontend' ? 'btn primary' : 'btn light'}>
              Frontend
            </h5>
          </li>
          <li>
            <h5 onClick={() => filterProjects('UI/UX')} className={selectedCategory === 'UI/UX' ? 'btn primary' : 'btn light'}>
              UI/UX Design
            </h5>
          </li>
        </ul>
     </div>
     
     <div className='container portfolio_container'>
     {
      filteredData.map(item => (
          <Card key={item.id} className='portfolio light'>
          <div className='portfolio_image'> 
          <img src={item.image} alt={item.title} />
          </div>
          <div className='portfolio_details'>
            <h4> {item.title}</h4>
            <p> {item.desc}</p>
          </div>
          <div className='portfolio_cta'>
          <a href='#contact' className='btn light'>Demo</a>
          <a href='#portfolio' className='btn primary'>Github</a>
         </div>
          </Card>
        ))
     }
     </div>
     </section>
     
  )
}

export default Portfolio