import React from 'react'

const PaymentParent = () => {
  return (
    <div className="mx-3">
    <NavbarOne/>
    <NavbarTwo/>
      <div className="d-flex justify-content-around flex-wrap ">
        {" "}
        <div className="col-lg-2  col-12 bg-light border rounded">
          {" "}
          <ProfileLeft />
        </div>
        <div className="col-lg-9 col-12 bg-light">
          <Outlet />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default PaymentParent
