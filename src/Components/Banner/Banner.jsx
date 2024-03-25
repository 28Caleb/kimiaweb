import React from 'react';
import './Banner.css';
import { Background } from '../../Data/data';
import Carousel from './Carousel/Carousel';
import { imageSlider } from '../../Data/data';
import BannerText from './Text/BannerText';


const Banner = () => {
  return (
    <div className='container-fluid fluid'>
      <div className='row'>
        <div className='col-12 col-sm-12 col-md-12 col-lg-12'>
            <div className='banner_bg clo-lg-12 col-md-12 col-sm-12 col-12' style={{ backgroundImage:`url(${Background.bgThree})`}}>
              <div className='CarouselBanner'>
                <Carousel data={imageSlider}/>
              </div>
              <div className='BannerText'>
                <BannerText/>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
