import React from 'react'
import OrderLeft from './OrderLeft'
import OrderRight from './OrderRight'

const OrdersBottom = () => {
  return (
 <div className='d-flex justify-content-between flex-wrap'>
<div className='col-'> <OrderLeft/></div>
<div className='col-'> <OrderRight/></div>
 
 </div>
  )
}

export default OrdersBottom
