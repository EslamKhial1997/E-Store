import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
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
      <div className="d-flex">
        <div className="d-flex col-3 bg-danger">
          <div className="col">
            <PersonIcon fontSize="larget"/>
          </div>
          <div className="">
            <h6 className="d-block">Customer</h6>
            <span className="d-block">Eslam Ahmed</span>
            <span className="d-block">eslamkhial1997@gmail.com</span>
            <span className="d-block">01098648010</span>
            <span className="d-block">View Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
