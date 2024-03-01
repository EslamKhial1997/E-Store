import React from "react";
import PaymentLeft from "./Payment.Left";
import PaymentRight from "./PaymentRight";

const PaymentParent = () => {
  return (
    <div className="mx-3">
     <div>
     <h2 className="m-3 text-dark fw-bold">Transication</h2>
     <button className="btn"></button>
     </div>
      <div className="d-flex justify-content-around flex-wrap ">
        {" "}
        <div className="col-lg-8  col-12 bg-light border rounded">
          {" "}
          <PaymentLeft />
        </div>
        <div className="col-lg-3 col-12 bg-danger">
          <PaymentRight />
        </div>
      </div>
    </div>
  );
};

export default PaymentParent;
