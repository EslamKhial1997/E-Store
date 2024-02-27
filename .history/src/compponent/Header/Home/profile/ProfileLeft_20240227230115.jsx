import React from "react";
import Style from "../Home.module.css";
import QrCodeIcon from "@mui/icons-material/QrCode";
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import InventoryIcon from '@mui/icons-material/Inventory';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import BusinessIcon from '@mui/icons-material/Business';
import PaymentsIcon from '@mui/icons-material/Payments';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SecurityIcon from '@mui/icons-material/Security';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LogoutIcon from '@mui/icons-material/Logout';
import img from "../profile/laptop.png";
const ProfileLeft = () => {
  return (
    <div className="col-12 text-start p-2 ">
      <div className="d-flex flex-wrap p-2" style={{ maxHeight: "75px" }}>
        <strong className="col-12">Eslam Ahmed</strong>
        <small className="col-12">eslamkhial1997@gmail.com</small>
      </div>
      <div
        className={`${Style.SideBar} d-flex d-lg-block d-md-flex d-sm-flex`}
        style={{ overflow: "scroll" }}
      >
        <div
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
           border border-bottom  shadow-lg ${Style.Popular}`}
        >
          <div
            className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
            style={{ maxHeight: "50px" }}
          >
            {" "}
            <div className="col-lg-5 col-10 ">
              {" "}
              <QrCodeIcon fontSize="large" color="warning"/>
            </div>
            <strong className="col-lg-6 col-10 ">QrCode</strong>
          </div>
        </div>
        <div
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
           border border-bottom  shadow-lg ${Style.Popular}`}
        >
          <div
            className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
            style={{ maxHeight: "50px" }}
          >
            {" "}
            <div className="col-lg-5 col-10 ">
              {" "}
              <ThumbsUpDownIcon fontSize="large" color="warning"/>
            </div>
            <strong className="col-lg-6 col-10 ">Wishlist</strong>
          </div>
        </div>
        <div
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
           border border-bottom  shadow-lg ${Style.Popular}`}
        >
          <div
            className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
            style={{ maxHeight: "50px" }}
          >
            {" "}
            <div className="col-lg-5 col-10 ">
              {" "}
              <InventoryIcon fontSize="large" color="warning"/>
            </div>
            <strong className="col-lg-6 col-10 ">Orders</strong>
          </div>
        </div>
        <div
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
           border border-bottom  shadow-lg ${Style.Popular}`}
        >
          <div
            className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
            style={{ maxHeight: "50px" }}
          >
            {" "}
            <div className="col-lg-5 col-10 ">
              {" "}
              <KeyboardReturnIcon fontSize="large" color="warning"/>
            </div>
            <strong className="col-lg-6 col-10 ">Returns</strong>
          </div>
        </div>
        <div
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
           border border-bottom  shadow-lg ${Style.Popular}`}
        >
          <div
            className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
            style={{ maxHeight: "50px" }}
          >
            {" "}
            <div className="col-lg-5 col-10 ">
              {" "}
              <BusinessIcon fontSize="large" color="warning"/>
            </div>
            <strong className="col-lg-6 col-10 ">Addresses</strong>
          </div>
        </div>
        <div
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
           border border-bottom  shadow-lg ${Style.Popular}`}
        >
          <div
            className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
            style={{ maxHeight: "50px" }}
          >
            {" "}
            <div className="col-lg-5 col-10 ">
              {" "}
              <PaymentsIcon fontSize="large" color="warning"/>
            </div>
            <strong className="col-lg-6 col-10 ">Payments</strong>
          </div>
        </div>
        <div
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
           border border-bottom  shadow-lg ${Style.Popular}`}
        >
          <div
            className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
            style={{ maxHeight: "50px" }}
          >
            {" "}
            <div className="col-lg-5 col-10 ">
              {" "}
              <CardGiftcardIcon fontSize="large" color="warning"/>
            </div>
            <strong className="col-lg-6 col-10 ">Gift Cards</strong>
          </div>
        </div>
        <div
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
           border border-bottom  shadow-lg ${Style.Popular}`}
        >
          <div
            className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
            style={{ maxHeight: "50px" }}
          >
            {" "}
            <div className="col-lg-5 col-10 ">
              {" "}
              <AccountCircleIcon fontSize="large" color="warning"/>
            </div>
            <strong className="col-lg-6 col-10 ">Profile</strong>
          </div>
        </div>
        <div
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
           border border-bottom  shadow-lg ${Style.Popular}`}
        >
          <div
            className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
            style={{ maxHeight: "50px" }}
          >
            {" "}
            <div className="col-lg-5 col-10 ">
              {" "}
              <CircleNotificationsIcon fontSize="large" color="warning"/>
            </div>
            <strong className="col-lg-6 col-10 ">Notification</strong>
          </div>
        </div>
        <div
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
           border border-bottom  shadow-lg ${Style.Popular}`}
        >
          <div
            className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
            style={{ maxHeight: "50px" }}
          >
            {" "}
            <div className="col-lg-5 col-10 ">
              {" "}
              <SecurityIcon fontSize="large" color="warning"/>
            </div>
            <strong className="col-lg-6 col-10 ">Security Settings</strong>
          </div>
        </div>
        <div
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
           border border-bottom  shadow-lg ${Style.Popular}`}
        >
          <div
            className="w-100 justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
            style={{ maxHeight: "50px" }}
          >
            {" "}
            <div className="col-lg-3 col-10 ">
              {" "}
              <ContactPhoneIcon fontSize="large" color="warning"/>
            </div>
            <strong className="col-lg-8 col-10  ">Contact Us</strong>
          </div>
        </div>
        <div
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
           border border-bottom  shadow-lg ${Style.Popular}`}
        >
          <div
            className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
            style={{ maxHeight: "50px" }}
          >
            {" "}
            <div className="col-lg-3 col-10 ">
              {" "}
              <LogoutIcon fontSize="large" color="warning"/>
            </div>
            <strong className="col-lg-8 col-10 ">LogOut</strong>
          </div>
        </div>






        
      </div>
    </div>
  );
};

export default ProfileLeft;
