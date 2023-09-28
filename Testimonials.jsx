import React, { useState, useEffect } from 'react';
import data from './data';
import Card from '../../components/Card';
import  SwiperCore from 'swiper';
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './testimonials.css';

SwiperCore.use([Pagination]);

const Testimonials = () => {
  const [slidesPerView, setSlidesPerView] = useState(3); // Default slidesPerView for desktop

  // Function to update slidesPerView based on screen width
  const updateSlidesPerView = () => {
    if (window.innerWidth < 600) {
      setSlidesPerView(1); // For mobile view
    } else {
      setSlidesPerView(3); // For desktop
    }
  };

  useEffect(() => {
    // Add event listener to window resize
    window.addEventListener('resize', updateSlidesPerView);

    // Initial call to set slidesPerView
    updateSlidesPerView();

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);
  return (
    <section id='testimonials'>
      <h2>What My Clients Say</h2>
      <p>These are unbiased testimonials from some of the clients</p>

      <Swiper
        spaceBetween={30}
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
      >
      <div className='container testinomials_container'>
        {data.map(item => (
          <SwiperSlide key={item.id}>
            <Card className='testimonials light'>
              <div className='description'>
                <p>{item.desc}</p>
              </div>
              <div className='testimonials_char'>
                <div className='testimonials_image'>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className='testimonials_details'>
                  <h5>{item.title}</h5>
                  <p>{item.prof}</p>
                </div>
              </div>
            </Card>
          </SwiperSlide>
        ))}
        </div>
      </Swiper>
    </section>
  );
};

export default Testimonials;
