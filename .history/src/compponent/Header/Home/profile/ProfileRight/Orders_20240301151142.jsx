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
      <div className="d-flex justify-content-around flex-wrap">


        <div className="d-flex flex-wrap col-lg-3 col-5 bg-body border p-2 rounded">
          <div className="col-lg col-md-3 col-12 p-2">
            <PersonIcon
              color="warning"
              className=" border border-warning rounded-circle"
              style={{ fontSize: "50px" }}
            />
          </div>
          <div className="">
            <h5 className="d-block fw-bolder">Customer</h5>
            <span className="d-block">Eslam Ahmed</span>
            <span className="d-block text-wrap text-truncate" style={{ width: "7em" }}>
              eslamkhial1997@gmail.casdasdom
            </span>
            <span className="d-block">01098648010</span>
            <span className="d-block">View Profile</span>
          </div>
        </div>
        <div className="d-flex flex-wrap col-lg-3 col-5 bg-body border p-2 rounded">
          <div className="col-lg col-md-3 col-12 p-2">
            <PersonIcon
              color="warning"
              className=" border border-warning rounded-circle"
              style={{ fontSize: "50px" }}
            />
          </div>
          <div className="">
            <h5 className="d-block fw-bolder">Customer</h5>
            <span className="d-block">Eslam Ahmed</span>
            <span className="d-block text-wrap text-truncate" style={{ width: "7em" }}>
              eslamkhial1997@gmail.casdasdom
            </span>
            <span className="d-block">01098648010</span>
            <span className="d-block">View Profile</span>
          </div>
        </div>
        <div className="d-flex flex-wrap col-lg-3 col-11 bg-body border p-2 rounded">
          <div className="d-flex align-items-center  col-12">
            <PersonIcon
              color="warning"
              className=" border border-warning rounded-circle"
              style={{ fontSize: "50px" }}
            />
            <h5 className="d-block fw-bolder w-100">Deliver To</h5>
          </div>
          <div className="col-8">
         
            <span className="d-block"><strong>City:</strong><small>Eslam Ahmed Khial</small></span>
            <span className="d-block"><strong>Str:</strong><small>Eslam Ahmed Khial</small></span>
            <span className="d-block"><strong>Address:</strong><small>Eslam Ahmed Khial</small></span>
           
            <span className="d-block">01098648010</span>
            <span className="d-block">View Profile</span>
          </div>
        </div>




     
      </div>
    </div>
  );
};

export default Orders;
