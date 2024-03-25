import React from 'react'
import './Carousel.css'
// import { imageSlider } from '../../../Data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// Importer les styles additionnels nécessaires pour Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow'; // ou tout autre effet que vous souhaitez utiliser
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import { Background } from '../../../Data/data'



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
  autoplay:{
    delay: 3500,
    disableOnInteraction: false,
  },
  // navigation:true,
  modules:[Autoplay, Pagination, Navigation]
};
 

const Carousel = ({data}) => {
  return (
    <div className='carouselSlider'>
      <div className='swiperCarousel'>
        <Swiper className='swiper' {...swiperOptions}>
        {data.map((item, id) => {
          return (
            <SwiperSlide key={id}>
              <img src={item.url} alt={`Slide ${id + 1}`} />
            </SwiperSlide>
          )
        })}
      </Swiper>
      </div>
    </div>

  )
}

export default Carousel