import React from "react";


import { useSelector } from "react-redux";
import Footer from "../../../../Footer/Footer";
import NavbarOne from "../../Navbar/NavbarOne";
import NavbarTwo from "../../Navbar/NavbarTwo";

import ProductDetailsRight from "./ProductDetailsRight";
import ProductDetailsLeft from "./ProductDetailsLeft";
import FooterBrand from "../../FooterBrand/FooterBrand";
const ProductDetails = () => {

  const { dataById } = useSelector((state) => state.StoreSlice);

  return (
    <div>
      <NavbarOne />
      <NavbarTwo />
      <div className="d-flex container justify-content-around mb-2 mt-5 flex-wrap">
     <ProductDetailsLeft/>
        <ProductDetailsRight/>
      </div>
      <Rati
      <FooterBrand/>
      <Footer />
    </div>
  );
};

export default ProductDetails;
