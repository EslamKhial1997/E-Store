import React from "react";
import CategoryLeft from "./CategoryLeft";
import CategoryRight from "./CategoryRight";
import NavbarOne from "../Header/Home/Navbar/NavbarOne";
import NavbarTwo from "../Header/Home/Navbar/NavbarTwo";
import HeighSale from "../Header/Home/heighSale/HeighSale";

import Brands from "../Header/Home/brands/Brands";
import SortIcon from "@mui/icons-material/Sort";
import FooterBrand from "../Header/Home/FooterBrand/FooterBrand";
import CategoriesNavBar from "./CategoriesNavBar";
const Categories = () => {
  return (
    <div>
      <NavbarOne />
      <NavbarTwo />
      <HeighSale />

      <CategoriesNavBar />
      <div className="d-flex">
        <div className="col-lg-2">
          {" "}
          <CategoryLeft />
        </div>

        <div>
          <CategoryRight />
        </div>
      </div>
      <FooterBrand />
    </div>
  );
};

export default Categories;
