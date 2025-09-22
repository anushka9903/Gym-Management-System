import { Box, IconButton, Modal } from '@mui/material'
import React from 'react'
import SubscriptionTable from './SubscriptionTable'

const Subscription = () => {
  return (
    <div className="px-5 pt-10 py-5 lg:px-20">
      <div className="flex justify-between items-center">
        <h1 className="text-xl lg:text-5xl font-bold">Subscriptions Details</h1>
        
      </div>

      <div className="mt-10">
        <SubscriptionTable/>
      </div>

     
    </div>
  )
}

export default Subscription