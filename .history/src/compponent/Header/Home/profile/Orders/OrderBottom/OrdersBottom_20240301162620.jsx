import React from "react";
import OrderLeft from "./OrderLeft";
import OrderRight from "./OrderRight";

const OrdersBottom = () => {
  return (
    <div className="container rounded d-flex justify-content-between flex-wrap">
      <div className="col-9 ">
        {" "}
        <OrderLeft />
      </div>
      <div className="col-3 bg-danger">
        {" "}
        <OrderRight />
      </div>
    </div>
  );
};

export default OrdersBottom;
