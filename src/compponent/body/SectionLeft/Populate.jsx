import React from 'react'
import img from "../img/zoom.png";
const Populate = () => {
  return (
    <div className="d-none d-lg-block d-md-block d-sm-none">
    <h6
      className="m-3 fw-bolder"
      style={{ color: "#072541", cursor: "pointer" }}
    >
      Popular
    </h6>
    <div className="d-flex justify-content-around border-bottom my-2">
      <div className="row col-6">
        {" "}
        <img
          src={img}
          style={{ width: "100%", height: "100%" }}
          className="border rounded"
        />
      </div>
      <div className="row col-6">
        <span className="fw-bold text-break">Zoom</span>
        <small className="text-secondary text-decoration-line-through">
          1250L.E
        </small>
        <strong className="text-warning">1100L.E</strong>
      </div>
    </div>
    <div className="d-flex justify-content-around border-bottom my-2">
      <div className="row col-6">
        {" "}
        <img
          src={img}
          style={{ width: "100%", height: "100%" }}
          className="border rounded"
        />
      </div>
      <div className="row col-6">
        <span className="fw-bold text-break">Zoom</span>
        <small className="text-secondary text-decoration-line-through">
          1250L.E
        </small>
        <strong className="text-warning">1100L.E</strong>
      </div>
    </div>
    <div className="d-flex justify-content-around  my-2">
      <div className="row col-6">
        {" "}
        <img
          src={img}
          style={{ width: "100%", height: "100%" }}
          className="border rounded"
        />
      </div>
      <div className="row col-6">
        <span className="fw-bold text-break">Zoom</span>
        <small className="text-secondary text-decoration-line-through">
          1250L.E
        </small>
        <strong className="text-warning">1100L.E</strong>
      </div>
    </div>
  </div>
  )
}

export default Populate
