import React from 'react'
import SubscriptionCard from './SubscriptionCard'

const subscription=[
  {

  "planName":"MONTHLY",
  "planPrice":"10",
  "planDuration":"1 Month",
  "planFeatures":[
    "Free Consultation",]
  },
  {
    "planName":"QUARTERLY",
    "planPrice":10*6,
    "planDuration":"6 Month",
    "planFeatures":[
      "Free Consultation",]
  },
  {
    "planName":"ANNUALLY",
    "planPrice":10*12,
    "planDuration":"12 Month",
    "planFeatures":[
      "Free Consultation",]
  }
]

const Subscription = () => {
  return (
    <div className='p-20 bg-[#151515]'>
        <div className='text-white text-center space-y-1'>
            <p className='font-semibold text-orange-500 text-xl'>Our Plan</p>
            <h1 className='font-bold text-2xl '>CHOOSE YOUR PRICING PLAN</h1>
        </div>
        <div className='flex flex-wrap gap-5 justify-center mt-20'>
            {subscription.map((item)=><SubscriptionCard item={item}/>)}
        </div>
        
    </div>
  )
}

export default Subscription