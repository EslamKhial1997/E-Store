import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
const Orders = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="py-3 text-dark  fw-bold text-capitalize">
          Order Details
        </h2>
        <div className="d-flex align-items-center bg-danger">
          <CalendarTodayIcon />
          Wed, Aug-10-2024 4:30 PM
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Orders;
