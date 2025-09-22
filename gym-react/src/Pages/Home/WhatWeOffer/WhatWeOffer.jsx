import React from 'react'
import WhatWeOfferCard from './WhatWeOfferCard'
import "./WhatWeOffer.css"
import { services } from './services'

const WhatWeOffer = () => {
  return (
    <div className='bg-[#151515] p-20'>
      <div className='pb-8'>
        <h1 className='text-center font-bold text-xl text-orange-500 uppercase'>Our class</h1>
        <h1 className='text-3xl font-bold text-center text-white'>WHAT WE CAN OFFER</h1>
      </div>
      <div className=' flex flex-wrap justify-center gap-10'>
        {services.map((item)=><WhatWeOfferCard item={item}/>)}
    </div>
    </div>
  )
}

export default WhatWeOffer