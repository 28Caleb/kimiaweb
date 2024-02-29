import React from 'react'
import './Carousel.css'
import { useState } from 'react';
import { imageSlider } from '../../../Data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// Importer les styles additionnels nécessaires pour Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow'; // ou tout autre effet que vous souhaitez utiliser
import img from '../../../Assets/images/carousel1.png'

// Option Swiper
const swiperOptions = {
  spaceBetween: 50,
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    clickable: true,
  },
};
 

const Carousel = () => {
  // const [currentState, setCurrentState] = useState(0);

  // const bgImageStyle = {
  //   backgroundImage: `url(${imageSlider[currentState].url})`,
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover',
  //   height: '100%',
  // };
  console.log('imageSlider:', imageSlider);

  return (
    <div className='carouselSlider'>
      {/* <div className='' style={bgImageStyle}></div> */}
      <div className='swiperCarousel align-middle '>
        <Swiper
        className='swiper'
        {...swiperOptions}
      >
      
        {imageSlider.map((imageSlider, id) => {
          return (
            <SwiperSlide key={id}>
              <img src={img} alt={`Slide ${id + 1}`} />
            </SwiperSlide>
          )
        })}
        
        ...
      </Swiper>
      </div>
    </div>
  
  )
}

export default Carousel