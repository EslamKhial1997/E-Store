import { Home } from "@mui/icons-material";
import Search from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import io from "socket.io-client";
const socket = io.connect("http://localhost:8008");
const NavbarTwo = () => {
  const removeToken = () => {
    localStorage.removeItem("token");
  };

//   const [message, setMessage] = useState("");
//   const [messageReceived, setMessageReceived] = useState("");
//   function sendMessage() {
//     console.log("Button clicked");
//     socket.emit("send_message", { message: message });
//   }
//   useEffect(() => {
//     socket.on("message", (data) => {
//       setMessageReceived(data.message);
//     });
//   }, []);
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light  text-light"
      style={{ backgroundColor: "#001933" }}
    >
      <div className="container-fluid align-items-center ">
     

        <div
          className="collapse navbar-collapse align-items-center justify-content-between"
          id="navbarSupportedContent"
        >
          <NavLink to={"/"} className="navbar-brand col-2 text-light fs-3 fw-bolder mt-2 mt-lg-0 fst-italic">
           <Home fontSize="large" color="warning"/> TopStore
          </NavLink>
        </div>
        <div className="d-flex col-lg-8 col-12 justify-content-between align-items-center">
          {" "}
          <div
            className=" d-flex align-items-center col-lg-6 col-18 mb-2 mb-lg-0 "
            style={{ position: "relative" }}
          >
            <input
              className="w-100 rounded border-warning p-lg-2"
              placeholder="Search"
            />
            <Search
              style={{ position: "absolute", right: "10px" ,color: "#072541"}}
            />
          </div>
          <div className="d-flex align-items-center">
            <a className="text-reset me-3" href="#">
              <i className="fas fa-shopping-cart"></i>
            </a>

            <div className="dropdown">
              <a
                className="text-reset me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell"></i>
                <span className="badge rounded-pill badge-notification bg-danger">
                  1
                </span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >



                <li>
                  <a className="dropdown-item" href="#">
                    Some news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end p-0"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <NavLink className="dropdown-item rounded " to={"/profile"}>
                  My profile
                </NavLink>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <NavLink
                    to={"/login"}
                    onClick={removeToken}
                    className="dropdown-item"
                    href="#"
                  >
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTwo;
