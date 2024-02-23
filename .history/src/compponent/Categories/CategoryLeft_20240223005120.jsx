import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from '@mui/material/Radio';
import Style from "../Header/Home/Home.module.css"
const CategoryLeft = () => {
  return (
    <div className="col-12 bg-light">
      <h3>Product Category</h3>
      <div className={`d-flex flex-wrap justify-content-around text-light ${Style.SideBar}`} 
      style={{ overflow: "scroll" }}>
        <div className="col-10 p-2 my-2 col-10 rounded" style={{backgroundColor:"#072541"}}>
          {" "}
          <FormControlLabel
            control={<Radio defaultChecked />}
            label="Infinix"
          />
        </div>
        <div className="col-10 p-2 my-2 col-10 rounded" style={{backgroundColor:"#072541"}}>
          {" "}
          <FormControlLabel
            control={<Radio defaultChecked />}
            label="Oppo"
          />
        </div>
        <div className="col-10 p-2 my-2 col-10 rounded" style={{backgroundColor:"#072541"}}>
          {" "}
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Samsung"
          />
        </div>
        <div className="col-10 p-2 my-2 col-10 rounded" style={{backgroundColor:"#072541"}}>
          {" "}
          <FormControlLabel
            control={<Radio />}
            label="Iphone"
          />
        </div>
        <div className="col-10 p-2 my-2 col-10 rounded" style={{backgroundColor:"#072541"}}>
          {" "}
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Huawei"
          />
        </div>
        <div className="col-10 p-2 my-2 col-10 rounded" style={{backgroundColor:"#072541"}}>
          {" "}
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Realme"
          />
        </div>
      
      </div>
    </div>
  );
};

export default CategoryLeft;
