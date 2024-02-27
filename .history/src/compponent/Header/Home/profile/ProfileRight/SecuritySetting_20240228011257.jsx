import React from "react";

const SecuritySetting = () => {
  return (
    <div className="container ">
      <div>
        <h2 className="fw-bolder text-dark my-3">Security Settings</h2>
        <h5>Use the noon QR code to pickup your orders at collection points</h5>
      </div>
      <div className="d-flex justify-content-center align-items-center bg-light mt-3 rounded">
        <div className="container">
          <h5>Security</h5>
          <div className="d-flex">
            <div className="d-flex col-lg-8 col-12 justify-content-between">
              <div className="col-12 d-flex flex-wrap">
                <label className=" col-12">Password</label>{" "}
                <div className="d-flex col-12 justify-content-between">
                  {" "}
                  <input
                    type="text"
                    placeholder="***********"
                    className=" p-2 rounded border col-8"
                  />
                  <button className="col-3   btn btn-warning ">
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySetting;
