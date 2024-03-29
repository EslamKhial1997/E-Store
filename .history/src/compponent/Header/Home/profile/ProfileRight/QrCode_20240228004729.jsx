import React from "react";
import qrcode from "../qrcode.png";
const QrCode = () => {
  return (
    <div className="container ">
      <div>
        <h2 className="fw-bolder text-dark my-3">QR Code</h2>
        <h5>Use the noon QR code to pickup your orders at collection points</h5>
      </div>
      <div
        className="d-flex justify-content-center align-items-center  mt-3 rounded"
        style={{ maxHeight: "200px" }}
      >
        <img src={qrcode} alt="QrCode Image" className="col-3 p-3" />
      </div>
    </div>
  );
};

export default QrCode;
