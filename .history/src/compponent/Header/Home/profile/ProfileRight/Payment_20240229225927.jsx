import React from 'react'
import img from "../mastercart.png"
const Payment = () => {
  return (
    <div className='table-responsive'> <table className="table">
    <thead>
      <tr>
        <th scope="col">TransicationID</th>
        <th scope="col">Paid</th>
        <th scope="col">Method</th>
        <th scope="col">Created</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">#115232445</th>
        <td>1520$</td>
        <td className='d-flex align-items-center'><img src={img} style={{width:"30px" , height:"30px"}}/><span>MasterCart</span></td>
        <td>29/2/2024 10:58 PM</td>
        <td><button>View</button></td>
      </tr>
      <tr>
      <th scope="row">#115232445</th>
      <td>1520$</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
      <th scope="row">#115232445</th>
      <td>1520$</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table></div>
   
  )
}

export default Payment
