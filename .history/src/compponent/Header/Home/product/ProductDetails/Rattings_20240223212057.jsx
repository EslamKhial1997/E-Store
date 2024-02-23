import React from "react";
import img from "../../../img/cat-1.jpg";
import Rating from "@mui/material/Rating";
const Rattings = () => {
  const [value, setValue] = React.useState(2);
  return (
    <div className="container">
      <h3>Point of view</h3>
      <div
        className="border rounded"
        style={{
          backgroundColor: "#072541",
          color: "#FFFFFF",
        }}
      >
        



        
        <div className="d-flex align-items-center justify-content-around my-2">
          <input
            type="text"
            className="col-lg-9 col-8 p-2"
            placeholder="What Your Mind"
          />
          <button
            className="border-0 text-light rounded py-2 col-lg-2 col-3"
            style={{ backgroundColor: "#FFBB5C", cursor: "pointer" }}
          >
            Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rattings;
