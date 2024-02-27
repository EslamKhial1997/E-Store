import React from "react";
import qrcode from "../qrcode.png";
const QrCode = () => {
  return (
    <div className="container">
      <div>
        <h2 className="fw-bolder text-dark my-3">QR Code</h2>
        <h5>Use the noon QR code to pickup your orders at collection points</h5>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-3 bg-danger" >
        <img src={qrcode} alt="QrCode Image" className="col-4" style={{maxHeight:"250px"}}/>
      </div>
    </div>
  );
};

export default QrCode;
