import React from "react";
import OrderLeft from "./OrderLeft";
import OrderRight from "./OrderRight";

const OrdersBottom = () => {
  return (
    <div className="container rounded d-flex justify-content-between flex-wrap">
      <div className="col-lg-8 ">
        {" "}
        <OrderLeft />
      </div>
      <div className="col-lg-3">
        {" "}
        <OrderRight />
      </div>
    </div>
  );
};

export default OrdersBottom;
