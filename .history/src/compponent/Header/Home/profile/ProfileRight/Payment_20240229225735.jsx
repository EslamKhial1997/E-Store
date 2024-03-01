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
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">#115232445</th>
        <td>1520$</td>
        <td className='d-flex align-items-center'><img src={img} style={{width:"30px" , height:"30px"}}/><span>MasterCart</span></td>
        <td>{ Date.now().}</td>
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
