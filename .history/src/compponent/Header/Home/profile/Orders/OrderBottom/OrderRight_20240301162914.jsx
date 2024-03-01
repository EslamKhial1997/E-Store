import React from "react";
import img from "../../mastercart.png";
const OrderRight = () => {
  return (
    <div className="bg-danger">
      <h5 className="p-2">Payment Information</h5>
      <div className="p-2">
        <img src={img} style={{ width: "50px", height: "50px" }} />
        <span>Master Cart</span>
      </div>
    </div>
  );
};

export default OrderRight;
