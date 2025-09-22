import React, { useEffect } from 'react'
import TrainerCard from './TrainerCard'
import { useDispatch, useSelector } from 'react-redux'
import { getTrainers } from '../../../redux/Trainers/Action'

const Team = () => {
  const {trainer}=useSelector(store=>store)
  const dispatch=useDispatch()

  useEffect(()=>{
      dispatch(getTrainers())
  },[])

  return (
  
        <div className='p-20 bg-[#151515]'>
        <div className='text-white text-center space-y-1'>
            <p className='font-semibold text-orange-500 text-xl'>Our Team</p>
            <h1 className='font-bold text-2xl '>TRAIN WITH EXPERTS</h1>
        </div>
        <div className='flex flex-wrap gap-5 justify-center mt-20'>
            {trainer.trainers.map((item)=><TrainerCard item={item}/>)}
        </div>
        
 
    </div>
  )
}

export default Team