import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const Orders = () => {
  const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];
  
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
        <div className="d-flex flex-wrap col-lg-3 col-11 bg-body border p-2 rounded">
        <div className="d-flex align-items-center justify-content-between col-12">
        <PersonIcon
          color="warning"
          className=" border m-2 border-warning rounded-circle"
          style={{ fontSize: "50px" }}
        />
        <h5 className="d-block fw-bolder w-100">Customer</h5>
      </div>
      <div className="col-12">
      <span className="d-block">
        <strong>Name:</strong>
        <small>Eslam Ahmed Khial</small>
      </span>
      <span className="d-block">
        <strong>E-Mail:</strong>
        <small>Eslam Ahmed Khial</small>
      </span>
      <span className="d-block">
        <strong>Phone:</strong>
        <small>Eslam Ahmed Khial</small>
      </span>

      <span className="d-block">View Profile</span>
    </div>
        </div>
        <div className="d-flex flex-wrap col-lg-3 col-11 bg-body border p-2 rounded">
        <div className="d-flex align-items-center justify-content-between col-12">
        <PersonIcon
          color="warning"
          className=" border m-2 border-warning rounded-circle"
          style={{ fontSize: "50px" }}
        />
        <h5 className="d-block fw-bolder w-100">Customer</h5>
      </div>
      <div className="col-12">
      <span className="d-block">
        <strong>Shipping:</strong>
        <small>E-Store</small>
      </span>
      <span className="d-block">
        <strong>Payment Method:</strong>
        <small>Master Cart</small>
      </span>
      <span className="d-block">
        <strong>Status:</strong>
        <small className="text-danger">Status</small>
      </span>

      <span className="d-block">View Payment</span>
    </div>
        </div>
        <div className="d-flex flex-wrap col-lg-3 col-11 bg-body border p-2 rounded">
          <div className="d-flex align-items-center justify-content-between col-12">
            <PersonIcon
              color="warning"
              className=" border m-2 border-warning rounded-circle"
              style={{ fontSize: "50px" }}
            />
            <h5 className="d-block fw-bolder w-100">Deliver To</h5>
          </div>
          <div className="col-12">
            <span className="d-block">
              <strong>City:</strong>
              <small>Eslam Ahmed Khial</small>
            </span>
            <span className="d-block">
              <strong>Str:</strong>
              <small>Eslam Ahmed Khial</small>
            </span>
            <span className="d-block">
              <strong>Address:</strong>
              <small>Eslam Ahmed Khial</small>
            </span>

            <span className="d-block">Open Map</span>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default Orders;
