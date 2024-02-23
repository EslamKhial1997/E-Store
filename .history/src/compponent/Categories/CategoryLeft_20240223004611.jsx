import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
const CategoryLeft = () => {
  return (
    <div className="col-12 bg-light">
      <h3>Product Category</h3>
      <div className={``} className={`${Style.SideBar} d-flex d-lg-block d-md-flex d-sm-flex`}
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
