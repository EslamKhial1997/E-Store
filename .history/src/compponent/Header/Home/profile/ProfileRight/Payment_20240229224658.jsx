import React from 'react'

const Payment = () => {
  return (
    <div className='table-responsive'> <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
       <div> <td className='col-12'>Mark</td>
       <td className='col-12'>Otto</td>
       <td className='col-12'>@mdo</td>
       <td className='col-12'>Mark</td>
       <td className='col-12'>Otto</td>
       <td className='col-12'>@mdo</td></div>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table></div>
   
  )
}

export default Payment