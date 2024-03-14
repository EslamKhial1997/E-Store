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
        className="d-flex justify-content-around align-items-center bg-body border mt-3 rounded"
        style={{ maxHeight: "200px", minHeight: "150px" }}
      >
        <div className="d-flex">
          <span>Home</span>
          <div>
            <EditIcon /> <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
