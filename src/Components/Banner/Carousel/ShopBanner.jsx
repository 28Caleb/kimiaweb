import React from 'react'
import './Carousel.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// Importer les styles additionnels nécessaires pour Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow'; // ou tout autre effet que vous souhaitez utiliser
import { Background } from '../../../Data/data'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const ShopBanner = ({data}) => {
  return (
    <div className='containerShop p-2' style={{ backgroundImage:`url(${Background.bgShop})`}}>
      {/* <Swiper
      spaceBetween={50}
      slidesPerView={1}
    >
    {data.map((index, id) => {
          return (
            <SwiperSlide key={id}>
              <div className='shopImg'>
                <img src={index.url} alt={`Slide ${id + 1}`} />
              </div>

              <div className='shoptext'>
                <h1 className='shopTitle'>{index.title}</h1>
              </div>
              
            </SwiperSlide>
          )
        })}
    </Swiper> */}
    </div>
  )
}

export default ShopBanner
