import React from 'react'
import PaymentLeft from './Payment.Left'

const PaymentParent = () => {
  return (
    <div className="mx-3">
   
      <div className="d-flex justify-content-around flex-wrap ">
        {" "}
        <div className="col-lg-2  col-12 bg-light border rounded">
          {" "}
          <PaymentLeft />
        </div>
        <div className="col-lg-9 col-12 bg-light">
          <Payment />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default PaymentParent
