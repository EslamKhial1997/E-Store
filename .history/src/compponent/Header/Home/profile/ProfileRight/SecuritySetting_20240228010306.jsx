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
          <h3>Security</h3>
          <div>
            <div>
              <label>Password</label>{" "}
              <input type="text" placeholder="***********" />
            </div>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySetting;
