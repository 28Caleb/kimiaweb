import React from 'react'
import ShopBanner from '../Components/Banner/Carousel/ShopBanner';
import {ShopBack} from '../Data/data'

const Shop = () => {
  return (
    <div>
      {/* banner shop */}
      <ShopBanner data={ShopBack}/>
    </div>

  )
}

export default Shop;