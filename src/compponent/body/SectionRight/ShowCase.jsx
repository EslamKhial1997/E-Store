import React from 'react'
import img from "../img/skinCare.png";
const ShowCase = () => {
  return (
    <div>
     <div className='d-flex flex-wrap justify-content-around p-1'>
     <img src={img} className='col-5 border rounded'/>
     <img src={img} className='col-5 border rounded'/>
     </div>
     <div className='d-flex flex-wrap justify-content-around p-1'>
     <img src={img} className='col-5 border rounded'/>
     <img src={img} className='col-5 border rounded'/>
     </div>
     <div className='d-flex flex-wrap justify-content-around p-1'>
     <img src={img} className='col-5 border rounded'/>
     <img src={img} className='col-5 border rounded'/>
     </div>
     <div className='d-flex flex-wrap justify-content-around p-1'>
     <img src={img} className='col-5 border rounded'/>
     <img src={img} className='col-5 border rounded'/>
     </div>
  
  
    </div>
  )
}

export default ShowCase
