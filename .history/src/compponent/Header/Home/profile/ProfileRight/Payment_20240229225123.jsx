import React from 'react'

const Payment = () => {
  return (
    <div className='table-responsive'> <table className="table">
    <thead>
      <tr>
        <th scope="col">TransicationID</th>
        <th scope="col">Paid</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">#115232445</th>
        <td>1520</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
      <th scope="row">#115232445</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
      <th scope="row">#115232445</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table></div>
   
  )
}

export default Payment
