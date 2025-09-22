import React from 'react'
import WhyChooseUsCard from './WhyChooseUsCard'
import { tools } from './tools'

const WhyChooseUs = () => {
  return (
    <div>
          <section class="bg-[#0a0a0a] p-20 text-white">
        <div class="">
            <div class="">
                <div class="">
                    <div class="section-title text-center space-y-2">
                        <p className=' text-xl text-orange-500 font-bold tracking-wider'>Why chose us?</p>
                        <h2 className='text-3xl font-bold'>PUSH YOUR LIMITS FORWARD</h2>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap justify-center gap-10 mt-20'>
               {tools.map((item)=> <WhyChooseUsCard item={item}/>)}
            </div>
            
        </div>
    </section>
    </div>
  )
}

export default WhyChooseUs