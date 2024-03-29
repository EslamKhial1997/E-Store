import React from "react";

const SecuritySetting = () => {
  return (
    <div className="container ">
      <div>
        <h2 className="fw-bolder text-dark my-3">Security Settings</h2>
      </div>
      <div className="d-flex justify-content-center align-items-center py-lg-5 py-2 mt-3 rounded bg-danger">
        <div className="container">
          <h5>Security</h5>
          <div className="d-flex">
            <div className="d-flex col-lg-8 col-12 justify-content-between">
              <div className="col-12 d-flex flex-wrap">
                <label className=" col-12">Password</label>{" "}
                <div className="d-flex flex-wrap col-12 justify-content-between">
                  {" "}
                  <input
                    type="text"
                    placeholder="***********"
                    className=" p-2 rounded border col-lg-8 col-12"
                  />
                  <button className="col-lg-3 col-6  border-0 rounded text-light fw-bold p-lg-2 p-1 my-lg-0 my-2 bg-warning ">
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="d-flex justify-content-center align-items-center py-lg-5 py-2 mt-3 rounded bg-warning">
        <div className="container">
          <h5>Account Deletion</h5>
          <div className="d-flex">
            <div className="d-flex col-lg-8 col-12 justify-content-between">
              <div className="col-12 d-flex flex-wrap">
                <label className=" col-12">Password</label>{" "}
                <div className="d-flex flex-wrap col-12 justify-content-between">
                  {" "}
                  <input
                    type="text"
                    placeholder="***********"
                    className=" p-2 rounded border col-lg-8 col-12"
                  />
                  <button className="col-lg-3 col-6  border-0 rounded text-light fw-bold p-lg-2 p-1 my-lg-0 my-2 bg-warning ">
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
