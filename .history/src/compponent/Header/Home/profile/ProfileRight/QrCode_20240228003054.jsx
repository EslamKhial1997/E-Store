import React from "react";
import qrcode from "../qrcode.png"
const QrCode = () => {
  return (
    <div className="container">
      <div>
        <h2 className="fw-bolder text-dark my-3">QR Code</h2>
        <h5>Use the noon QR code to pickup your orders at collection points</h5>
      </div>
      <div>
      <img src={qrcode} al/>
      
      </div>
    </div>
  );
};

export default QrCode;
