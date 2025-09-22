import React from 'react'

const WhyChooseUsCard = ({item}) => {
  return (
    <div className='group transition-all ease-in-out duration-1000 w-60 text-center flex flex-col items-center space-y-5 justify-center'>
        <div className='bg-[#232323] p-5 rounded-full flex justify-center items-center h-24 w-24 group-hover:bg-orange-500 '>
        
            <i className={`${item.icon} text-orange-500 text-4xl group-hover:text-white`}></i>
        </div>
        <h1 className='align-text-bottom text-xl font-bold'>{item.name}</h1>
        <p>{item.description}</p>
        
    </div>
  )
}

export default WhyChooseUsCard