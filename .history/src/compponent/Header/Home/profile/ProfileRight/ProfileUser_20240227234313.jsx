import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const ProfileUser = () => {
  return (
    <div className="container ">
      <h2 className="py-3 text-dark text-decoration-underline fw-bold">Profile Information</h2>
      <div>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label text-dark">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputPassword4" className="form-label text-dark">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputPassword4" className="form-label text-dark">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label text-dark">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="col-6">
            <label htmlFor="inputAddress2" className="form-label text-dark">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label text-dark">
              City
            </label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label text-dark">
              Gender
            </label>
            <select id="inputState" className="form-select">
              <option selected>Choose...</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="inputZip" className="form-label text-dark">
              Birthday
            </label>
            <div className="form-control border-0 p-1">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="border-0 p-0 h-100 " />
              </LocalizationProvider>
            </div>
          </div>
        
          <div className="col-12">
            <button type="submit" className="btn text-light" style={{ backgroundColor: "#072541" }}>
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileUser;