import React from "react";
import img from "../../mastercart.png";
const OrderRight = () => {
  return (
    <div className="bg-danger rounded ">
      <h5 className="p-2">Payment Information</h5>
      <div className="">
        <img src={img} style={{ width: "50px", height: "50px" }} />
        <span>Master Cart</span>
        <small>************1556</small>
      </div>
      <div className="">

        <strong>Bussniss Name:-</strong>
        <small>MasterCart.inc</small>
      </div>
      <div className="">

        <strong>Phone:-</strong>
        <small>01276448769</small>
      </div>
    </div>
  );
};

export default OrderRight;
