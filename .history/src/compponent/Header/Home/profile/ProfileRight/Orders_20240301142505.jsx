import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from '@mui/icons-material/Person';
const Orders = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="py-3 text-dark  fw-bold text-capitalize">
          Order Details
        </h2>
        <div className="d-flex align-items-center bg-warning p-2 rounded">
          <CalendarTodayIcon />
          Wed, Aug-10-2024 4:30 PM
        </div>
      </div>
      <div>
      <div className="d-flex">
      <div className="row">
      <PersonIcon/>
      </div>
      <div className="row">
      <h6>Customer</h6>
      <span>Eslam Ahmed</span>
      <span></span>
      <span></span>
      <span></span>
      </div>
      
      </div>
      </div>
    </div>
  );
};

export default Orders;
