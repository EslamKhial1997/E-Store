import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import img from "../../img/carousel-1.jpg";
import MailIcon from "@mui/icons-material/Mail";
import { NavLink } from "react-router-dom";
const ShoppingCartNav = ({ open, toggle }) => {
  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => {
        toggle(false);
      }}
    >
      <List>
        <div className="container d-flex justify-content-between align-items-center">
          <img
            src={img}
            className="rounded"
            style={{ width: "50px", height: "50px" }}
          />
          <div>
          <span className="d-block">Esmail</span>
          <span className="d-block">1500</span>
         
          
          </div>
        </div>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
   
      <Drawer
        open={open}
        onClose={() => {
          toggle(false);
        }}
        anchor="right"
      >
      <h3 className="text-center p-2 border-bottom border-3">E-Store Shop Cart</h3>
        {DrawerList}
        <NavLink className="btn bg-warning rounded text-light">
          Go To Cart
        </NavLink>
      </Drawer>
    </div>
  );
};

export default ShoppingCartNav;
