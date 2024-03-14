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
        style={{ maxHeight: "200px", minHeight: "150px" }}
      >
        <div className="d-flex  col-12 justify-content-between pt-2 ">
          <h3 className="fw-bold">Home</h3>
          <div className="">
            <EditIcon /> <DeleteIcon />
          </div>
        </div>
        <div>
        <span>El-Arish Noth-Sina Next to the new parking lot</span>
        <span></span>
        <span></span>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
