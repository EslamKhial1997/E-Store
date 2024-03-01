import React from "react";
import img from "../../mastercart.png";
const OrderRight = () => {
  return (
    <div className=" bg-warinig m-2 bg-warning container">
      <div className="bg-body p-2 rounded">
        <h5 className="p-2">Payment Information</h5>
        <div className="my-2">
          <img src={img} style={{ width: "50px", height: "50px" }} />
          <span>Master Cart Num</span>
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
      <div className="my-2">
      <div className="bg-warning rounded">
         
          <div className="">
            <img src={img} style={{ width: "50px", height: "50px" }} />
            <span>Master Cart Num</span>
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
      </div>
    </div>
  );
};

export default OrderRight;
