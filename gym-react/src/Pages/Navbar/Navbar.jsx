import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./Navbar.css"
import { Avatar } from '@mui/material'
import { orange } from '@mui/material/colors'

const Navbar = () => {
  const {auth}=useSelector(store=>store)
  const navigate=useNavigate()
  return (
    <div className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 lg:px-32 text-white bg-[black] bg-opacity-70 blur-background py-5'>
        <p className='font-bold text-2xl'>FITME</p>
        <div className='flex items-center gap-2 lg:gap-10 text-lg'>
            <button onClick={()=>navigate("/")}>Home</button>
            <button onClick={()=>navigate("/diet")}>Healthy Diet</button>
            <button onClick={()=>navigate("/about")}>About</button>
            <button onClick={()=>navigate("/contact")}>Contact</button>
            
            {auth.user? <Avatar sx={{bgcolor:orange[700],color:"white"}}>
              {auth.user.fullName[0].toUpperCase()}
            </Avatar>: <button onClick={()=>navigate("/login")}>Login</button>}
            
            
            
        </div>
    </div>
  )
}

export default Navbar