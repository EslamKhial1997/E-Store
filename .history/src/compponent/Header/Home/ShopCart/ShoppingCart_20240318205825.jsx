import React from "react";

import { AddOutlined, DeleteForever } from "@mui/icons-material";

import RemoveIcon from "@mui/icons-material/Remove";

import { NavLink } from "react-router-dom";

import Footer from "../../../Footer/Footer";

import NavbarTwo from "../Navbar/NavbarTwo";
import NavbarOne from "../Navbar/NavbarOne";
const ShoppingCart = () => {
  return (
    <div>
    <NavbarOne/>
    <NavbarTwo/>
      <section className="h-100 gradient-custom">
        <div className="container py-1">
          <div className="row d-flex justify-content-center my-4">
            <div className={` col-md-4 h-100`}>
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="container d-flex justify-content-center"><input type="text" className="col-11"/></div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>$53.98</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>$53.98</strong>
                      </span>
                    </li>
                  </ul>

                  <NavLink
                    to="/shopCart/payment"
                    type="button"
                    className="btn btn-warning btn-lg btn-block"
                  >
                    Go to checkout
                  </NavLink>
                </div>
              </div>
              <div className="d-flex flex-wrap">
              <div className="card mb-4 col-12">
                <div className="card-body">
                  <p>
                    <strong>Expected shipping delivery</strong>
                  </p>
                  <p className="mb-0">12.10.2020 - 14.10.2020</p>
                </div>
              </div>

             
            </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header d-flex justify-content-between py-3">
                  <h5 className="mb-0">Cart - 2 items</h5>
                  <button className="btn btn-danger text-light fw-bold">Clear Cart <DeleteForever/></button>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      <div
                        className="bg-image hover-overlay hover-zoom ripple rounded"
                        data-mdb-ripple-color="light"
                      >
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                          className="w-100"
                          alt="Blue Jeans Jacket"
                        />
                        <a href="#!">
                          <div className="mask"></div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      <p>
                        <strong>Blue denim shirt</strong>
                      </p>
                      <p>Color: blue</p>
                      <p>Size: M</p>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm me-1 mb-2"
                        data-mdb-toggle="tooltip"
                        title="Remove item"
                      >
                        <DeleteForever />
                      </button>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      <div
                        className="d-flex mb-4 align-items-center "
                        style={{ maxwidth: "300px" }}
                      >
                        <button
                          className="btn btn-warning px-2 ms-1"
                          onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                        >
                          <RemoveIcon />
                        </button>

                        <div className="form-outline text-center align-items-center">
                          <strong className="d-block">10</strong>
                        </div>

                        <button
                          className="btn btn-warning px-2 ms-1"
                          onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                        >
                          <AddOutlined />
                        </button>
                      </div>

                      <p className="text-start text-md-center">
                        <strong>$17.99</strong>
                      </p>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="row">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      <div
                        className="bg-image hover-overlay hover-zoom ripple rounded"
                        data-mdb-ripple-color="light"
                      >
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                          className="w-100"
                          alt="Blue Jeans Jacket"
                        />
                        <a href="#!">
                          <div className="mask"></div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      <p>
                        <strong>Blue denim shirt</strong>
                      </p>
                      <p>Color: blue</p>
                      <p>Size: M</p>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm me-1 mb-2"
                        data-mdb-toggle="tooltip"
                        title="Remove item"
                      >
                        <DeleteForever />
                      </button>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      <div
                        className="d-flex mb-4 align-items-center "
                        style={{ maxwidth: "300px" }}
                      >
                        <button
                          className="btn btn-warning px-2 ms-1"
                          onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                        >
                          <RemoveIcon />
                        </button>

                        <div className="form-outline text-center align-items-center">
                          <strong className="d-block">10</strong>
                        </div>

                        <button
                          className="btn btn-warning px-2 ms-1"
                          onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                        >
                          <AddOutlined />
                        </button>
                      </div>

                      <p className="text-start text-md-center">
                        <strong>$17.99</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default ShoppingCart;
