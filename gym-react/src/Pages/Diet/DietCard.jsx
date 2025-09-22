import React from 'react'

const DietCard = ({item}) => {
  return (
    <div className='flex'>
        <img src={item.image} alt="" />
        <div className='w-[60%] px-10 space-y-5'>

            <h1 className='text-4xl font-bold'>{item.title}</h1>
            <p className=''>{item.description}</p>

            <h1 className='text-2xl font-semibold text-orange-500'>Ingredients</h1>
            <ul className='space-y-2'>
                {item.ingredients.map((ingredient)=><li>{ingredient}</li> )}
                
            </ul>

        </div>
    </div>
  )
}

export default DietCard