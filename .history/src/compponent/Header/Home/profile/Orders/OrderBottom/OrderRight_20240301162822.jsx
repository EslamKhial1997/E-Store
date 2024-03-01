import React from 'react'
import img from "../../mastercart.png";
const OrderRight = () => {
  return (
    <div className='bg-danger'>
     <h5 className='p-2'>Payment Information</h5>
     <div>
     <img src={img}/>
     </div>
    </div>
  )
}

export default OrderRight
