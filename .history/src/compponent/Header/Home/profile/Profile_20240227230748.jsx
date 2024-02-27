import { Outlet } from "react-router-dom";
import ProfileLeft from "./ProfileLeft";
import ProfileRight from "./ProfileRight";

const Profile = () => {
  return (
    <div className="m-3">
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
