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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
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
