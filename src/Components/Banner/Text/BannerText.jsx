import React from 'react'
import '../Carousel/Carousel.css'
const BannerText = () => {
  return (
    <div className='textContainer'>
      <h1 className='text-white fs-1 fw-bold text-center text-capitalize'>Achetez les meilleurs produits sur tous le territoire national</h1>
    <p className='text-white text-center ml-5 mr-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    </p>

    <div className='btngrouped d-flex'>
        <button type="button" class="btn btn-outline-primary mr-2">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
    </div>
    

    </div>
  )
}

export default BannerText
