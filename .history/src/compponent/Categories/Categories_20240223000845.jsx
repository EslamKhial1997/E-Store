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

      <div className="container-fluid d-flex justify-content-around flex-wrap">
        <div className="col-12">
          <div className="d-flex">
            <div>
              <input />
              <button>Search</button>
            </div>
            <div>
              <span>Category 1500 Result</span>
              <select
                className="form-select"
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
