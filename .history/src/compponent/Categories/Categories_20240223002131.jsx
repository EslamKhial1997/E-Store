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
        <div className="col-12 bg-light p-3">
          <div className="d-flex justify-content-between  align-items-center">
            <div className="col-lg-3 col-6 d-flex flex-wrap justify-content-between border">
              <input type="text" placeholder="Search" className="border w-100 rounded p-1"/>
              <button className="btn col-12 text-light" style={{backgroundColor:"#072541"}}>Search</button>
            </div>
            <div className="col-lg-8 col-md-5 col-sm-5 flex-wrap d-flex align-items-center justify-content-lg-end justify-content-between bg-danger">
              <span className="col-lg-2 col-12">Category 1500 Result</span>
              <div className="col-lg-3 col-12">
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
