import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginEmail from "./compponent/User/LoginEmail";

import Login from "./compponent/User/Login";
import SignUp from "./compponent/User/SignUp";
import App from "./App";

import Home from "./compponent/Header/Home/Home";
import ShoppingCart from "./compponent/Header/Home/ShoppingCart";
import Dashboard from "./compponent/Dashboard/Dashboard";
import DashBoardCategory from "./compponent/Dashboard/pages/Categories/Category";
import DashBoardSubCategory from "./compponent/Dashboard/pages/SubCategories/SubCategories";
import DashBoardProduct from "./compponent/Dashboard/pages/Products/Product";
import { Provider } from "react-redux";
import { ConfigStore } from "./compponent/Store/config";
import Profile from "./compponent/Header/Home/profile/Profile";
import DashBoardUser from "./compponent/Dashboard/pages/User/User";
import DashBoardBrands from "./compponent/Dashboard/pages/Brands/DashBoardBrands";

import DashBoardHome from "./compponent/Dashboard/pages/DashBoardHome/DashBoardHome";
import ProductDetail from "./compponent/Dashboard/pages/Products/ProductDetails";
import UserInfo from "./compponent/Dashboard/pages/User/UserInfo";
import CategoryForm from "./compponent/Dashboard/pages/Categories/CategoryForm/CategoryForm";
import SignUpDashBoard from "./compponent/Dashboard/Auth/SignupDashBoard";
import LoginDashBoard from "./compponent/Dashboard/Auth/LoginDashBoard";
import AuthDashboard from "./compponent/Dashboard/Auth/AuthDashboard";
import ForgetPasswordDashBoard from "./compponent/Dashboard/Auth/ForgotPassword/ForgetPasswordDashBoard";
import './i18n';
import Categories from "./compponent/Categories/Categories";
const Route = createBrowserRouter([
  {
    path: "/",
    element: <ProductDetail />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
     
    ],
  },

  {
    path: "/login",
    element: <Login />,
    children: [
      {
        index: true,
        element: <LoginEmail />,
      },
    ],
  },
  {
    path: "/ForgetPassword",
    element: (
      <section className="background-radial-gradient overflow-hidden section align-items-center justify-content-center">
        <div className="container h-100 ">
          <div className="row gx-lg-5 justify-content-center align-items-center mt-5">
            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div>

              <div className=" bg-glass ">
                <div className="card-body px-4 py-5 px-md-5">
                  <ForgetPasswordDashBoard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ),
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/shopCart",
    element: <ShoppingCart />,
  },

  {
    path: "/dashboard/Auth",
    element: <AuthDashboard />,
    children: [
      {
        index: true,
        element: <LoginDashBoard />,
      },
      { path: "SignUpDashboard", element: <SignUpDashBoard /> },
      {
        path: "ForgetPasswordDashBoard",
        element: <ForgetPasswordDashBoard />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <DashBoardHome />,
      },
      { path: "/dashboard/DashBoardUser", element: <DashBoardUser /> },
      { path: "/dashboard/DashBoardUser/:id", element: <UserInfo /> },
      { path: "/dashboard/DashBoardCategory", element: <DashBoardCategory /> },
      {
        path: "/dashboard/DashBoardCategory/:id",
        element: <CategoryForm />,
      },
      {
        path: "/dashboard/DashBoardSubCategory",
        element: <DashBoardSubCategory />,
      },
      { path: "/dashboard/DashBoardBrands", element: <DashBoardBrands /> },
      { path: "/dashboard/DashBoardProduct", element: <DashBoardProduct /> },
      { path: "/dashboard/DashBoardProduct/:id", element: <ProductDetail /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={ConfigStore}>
    {" "}
    <RouterProvider router={Route} />
  </Provider>
);
