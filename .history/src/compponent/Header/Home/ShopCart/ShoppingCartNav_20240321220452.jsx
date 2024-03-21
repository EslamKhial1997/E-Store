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
        <ListItem disablePadding>
          <ListItemButton>
            <img src={img} />
            <ListItemText primary={"text"} />
          </ListItemButton>
        </ListItem>
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
        {DrawerList}
        <NavLink className="btn bg-warning rounded text-light">
          Go To Cart
        </NavLink>
      </Drawer>
    </div>
  );
};

export default ShoppingCartNav;
