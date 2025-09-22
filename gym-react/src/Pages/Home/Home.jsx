import React from 'react'
import Banner from './Banner/Banner'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import WhatWeOfferCard from './WhatWeOffer/WhatWeOfferCard'
import WhatWeOffer from './WhatWeOffer/WhatWeOffer'
import RegisterNow from './RegisterNow'
import Subscription from './Subscription/Subscription'
import Team from './Team/Team'
import Gallary from './gallary/Gallary'
import ContactUs from '../ContactUs/ContactUs'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
        <Banner/>
        <WhyChooseUs/>
        <WhatWeOffer/>
        <RegisterNow/>
        <Subscription/>
        <Gallary/>
        <Team/>
        <ContactUs/>
        <Footer/>

    </div>
  )
}

export default Home