import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const Addresses = () => {
  return (
    <div className="container ">
      <div>
        <h2 className="fw-bolder text-dark my-3">
          Welcome <span>Eslam Ahmed</span>
        </h2>
      </div>
      <div
        className="d-flex container flex-wrap bg-body border mt-3 rounded"
      
      >
        <div className="d-flex  col-12 justify-content-between pt-2 ">
          <h3 className="fw-bold">Home</h3>
          <div className="">
            <EditIcon /> <DeleteIcon />
          </div>
        </div>
        <div>
        <div>
        <span className="d-block">El-Arish Noth-Sina Next to the new parking lot</span>
        </div>
       
       <div className="d-block"> <span className="fw-bold text-secound">Phone:</span><small>01098648010</small> </div>
       <div className="d-block"> <span className="fw-bold text-secound">Gander:</span><small>Male</small> </div>
       <div className="d-block"> <span className="fw-bold text-secound">postalCode:</span><small>068</small> </div>
      
        </div>
      </div>
    </div>
  );
};

export default Addresses;
