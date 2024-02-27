import { Outlet } from "react-router-dom";
import ProfileLeft from "./ProfileLeft";
import NavbarOne from "../Navbar/NavbarOne";

const Profile = () => {
  return (
    <div className="mx-3">
    <NavbarOne/>
    <Nav
      <div className="d-flex justify-content-around flex-wrap ">
        {" "}
        <div className="col-lg-2  col-12 bg-light border rounded">
          {" "}
          <ProfileLeft />
        </div>
        <div className="col-lg-9 col-12 bg-light">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;
