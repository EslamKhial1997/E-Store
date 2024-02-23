import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Style from "../"
const CategoryLeft = () => {
  return (
    <div className="col-12 bg-light">
      <h3>Product Category</h3>
      <div className={`d-flex flex-wrap justify-content-around text-light ${Style.SideBar}`} 
      style={{ overflow: "scroll" }}>
        <div className="col-10 p-2 my-2 col-10 rounded" style={{backgroundColor:"#072541"}}>
          {" "}
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Label"
          />
        </div>
        <div className="col-10 p-2 my-2 col-10 rounded" style={{backgroundColor:"#072541"}}>
          {" "}
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Label"
          />
        </div>
        <div className="col-10 p-2 my-2 col-10 rounded" style={{backgroundColor:"#072541"}}>
          {" "}
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Label"
          />
        </div>
        <div className="col-10 p-2 my-2 col-10 rounded" style={{backgroundColor:"#072541"}}>
          {" "}
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Label"
          />
        </div>
        <div className="col-10 p-2 my-2 col-10 rounded" style={{backgroundColor:"#072541"}}>
          {" "}
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Label"
          />
        </div>
        <div className="col-10 p-2 my-2 col-10 rounded" style={{backgroundColor:"#072541"}}>
          {" "}
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Label"
          />
        </div>
      
      </div>
    </div>
  );
};

export default CategoryLeft;
