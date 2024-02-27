import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import profile from "../profile.png";
const ProfileUser = () => {
  return (
    <div className="container ">
      <h2 className="py-3 text-dark text-decoration-underline fw-bold">
        Profile Information
      </h2>
      <div>
        <form className="row g-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="col-md-6">
              <div className="col-md-12">
                <label htmlFor="inputEmail4" className="form-label text-dark">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Enter Your E-Mail"
                />
              </div>
              <div className="col-md-12">
                <label
                  htmlFor="inputPassword4"
                  className="form-label text-dark"
                >
                  First Name
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="First Name"
                />
              </div>
              <div className="col-md-12">
              <label htmlFor="inputPassword4" className="form-label text-dark">
                Last Name
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                placeholder="Last Name"
              />
            </div>
            </div>
          <div className="col-md-5"><img src={profile} alt="Profile Img" className="w-100" style={{max}}/></div>
          </div>
        
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label text-dark">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Enter Your Main Address"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputAddress2" className="form-label text-dark">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Enter Your Phone Number"
            />
          </div>
          <div className="col-md-8">
            <label htmlFor="inputCity" className="form-label text-dark">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              placeholder="Enter Your City"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label text-dark">
              Gender
            </label>
            <select id="inputState" className="form-select">
              <option selected>Choose Gender...</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="col-md-4">
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
            <button
              type="submit"
              className="btn text-light fw-bold"
              style={{ backgroundColor: "#072541" }}
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileUser;
