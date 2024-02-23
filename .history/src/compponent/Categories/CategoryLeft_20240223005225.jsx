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
      
      
      </div>
    </div>
  );
};

export default CategoryLeft;
