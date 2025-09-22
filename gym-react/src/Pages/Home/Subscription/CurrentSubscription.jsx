import { Avatar, Button } from '@mui/material';
import { green, orange } from '@mui/material/colors';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CurrentSubscription = () => {
    const { subscription } = useSelector((store) => store);
    const navigate=useNavigate();
  return (
    <div>
          <div className="z-50 space-y-5 flex flex-col items-center  text-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <Avatar sx={{ bgcolor: orange[500],height:"5rem",width:"5rem" }}>
          <i class="fas fa-user text-white text-4xl"></i>
          </Avatar>

          <p className="text-xl">Your Current Subscription</p>
        </div>
        <div className="space-y-3">
          <p className="text-green-500">
            start date: {subscription.userSubscription?.subscriptionStartDate}
          </p>
          <p className="text-red-500">
            end date : {subscription.userSubscription?.subscriptionEndDate}
          </p>
          <p>plan type : {subscription.userSubscription?.planType}</p>
        </div>
        <p className='text-red-600 py-5'>Once your current plan expire then you can subscribe new plan</p>
      </div>
    </div>
  )
}

export default CurrentSubscription