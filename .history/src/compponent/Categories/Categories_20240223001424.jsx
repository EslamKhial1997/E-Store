import React from "react";
import CategoryLeft from "./CategoryLeft";
import CategoryRight from "./CategoryRight";
import NavbarOne from "../Header/Home/Navbar/NavbarOne";
import NavbarTwo from "../Header/Home/Navbar/NavbarTwo";
import HeighSale from "../Header/Home/heighSale/HeighSale";

import Brands from "../Header/Home/brands/Brands";

const Categories = () => {
  return (
    <div>
      <NavbarOne />
      <NavbarTwo />
      <HeighSale />

      <div className="container-fluid d-flex justify-content-around align-items-center flex-wrap">
        <div className="col-12 bg-light p-2">
          <div className="d-flex justify-content-between  align-items-center">
            <div className="col-3">
              <input type="text" placeholder="Search" className="border rounded"/>
              <button className="btn btn-small" style={{backgroundColor:"#072541"}}>Search</button>
            </div>
            <div className="col-8 d-flex align-items-center justify-content-end ">
              <span className="col-2">Category 1500 Result</span>
              <div className="col-3">
                {" "}
                <select
                  className="form-select "
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2">
          <CategoryLeft />
        </div>
        <div className="col-9">
          <CategoryRight />
        </div>
      </div>
      <Brands />
    </div>
  );
};

export default Categories;
