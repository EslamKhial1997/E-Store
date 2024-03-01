import React from 'react'
import OrderLeft from './OrderLeft'
import OrderRight from './OrderRight'

const OrdersBottom = () => {
  return (
 <div className='d-flex justify-content-'>
<div> <OrderLeft/></div>
<div> <OrderRight/></div>
 
 </div>
  )
}

export default OrdersBottom
