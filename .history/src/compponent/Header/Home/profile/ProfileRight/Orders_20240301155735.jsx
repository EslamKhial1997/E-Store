import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

const Orders = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="py-3 text-dark  fw-bold text-capitalize">
          Order Details
        </h2>
        <div className="d-flex align-items-center bg-warning p-2 rounded">
          <CalendarTodayIcon />
          Wed, Aug-10-2024 4:30 PM
        </div>
      </div>
      <div className="d-flex justify-content-around flex-wrap">
        <List
         
          component="nav"
          aria-labelledby="nested-list-subheader"
        
        >
          <ListItemButton onClick={handleClick}>
          <div className="d-flex align-items-center justify-content-between col-12">
          <PersonIcon
            color="warning"
            className=" border m-2 border-warning rounded-circle"
            style={{ fontSize: "50px" }}
          />
          <h5 className="d-block fw-bolder w-100">Customer</h5>
        </div>
            
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <div className="d-flex flex-wrap  col-12 bg-body border p-2 rounded">
              
                <div className="col-12">
                  <span className="d-block">
                    <strong>Name:</strong>
                    <small>Eslam Ahmed Khial</small>
                  </span>
                  <span className="d-block">
                    <strong>E-Mail:</strong>
                    <small>Eslam Ahmed Khial</small>
                  </span>
                  <span className="d-block">
                    <strong>Phone:</strong>
                    <small>Eslam Ahmed Khial</small>
                  </span>

                  <span className="d-block">View Profile</span>
                </div>
              </div>
            </List>
          </Collapse>
        </List>




        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        
        >
          <ListItemButton onClick={handleClick}>
          <div className="d-flex align-items-center justify-content-between col-12">
          <PersonIcon
            color="warning"
            className=" border m-2 border-warning rounded-circle"
            style={{ fontSize: "50px" }}
          />
          <h5 className="d-block fw-bolder w-100">Customer</h5>
        </div>
            
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <div className="d-flex flex-wrap  col-12 bg-body border p-2 rounded">
            <div className="d-flex align-items-center justify-content-between col-12">
              <PersonIcon
                color="warning"
                className=" border m-2 border-warning rounded-circle"
                style={{ fontSize: "50px" }}
              />
              <h5 className="d-block fw-bolder w-100">Customer</h5>
            </div>
            <div className="col-12">
              <span className="d-block">
                <strong>Shipping:</strong>
                <small>E-Store</small>
              </span>
              <span className="d-block">
                <strong>Payment Method:</strong>
                <small>Master Cart</small>
              </span>
              <span className="d-block">
                <strong>Status:</strong>
                <small className="text-danger">Status</small>
              </span>
  
              <span className="d-block">View Payment</span>
            </div>
          </div>
            </List>
          </Collapse>
        </List>




        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        
        >
          <ListItemButton onClick={handleClick}>
          <div className="d-flex align-items-center justify-content-between col-12">
          <PersonIcon
            color="warning"
            className=" border m-2 border-warning rounded-circle"
            style={{ fontSize: "50px" }}
          />
          <h5 className="d-block fw-bolder w-100">Customer</h5>
        </div>
            
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <div className="d-flex flex-wrap col-lg-3 col-11 bg-body border p-2 rounded">
            <div className="d-flex align-items-center justify-content-between col-12">
              <PersonIcon
                color="warning"
                className=" border m-2 border-warning rounded-circle"
                style={{ fontSize: "50px" }}
              />
              <h5 className="d-block fw-bolder w-100">Deliver To</h5>
            </div>
            <div className="col-12">
              <span className="d-block">
                <strong>City:</strong>
                <small>Eslam Ahmed Khial</small>
              </span>
              <span className="d-block">
                <strong>Str:</strong>
                <small>Eslam Ahmed Khial</small>
              </span>
              <span className="d-block">
                <strong>Address:</strong>
                <small>Eslam Ahmed Khial</small>
              </span>
  
              <span className="d-block">Open Map</span>
            </div>
          </div>
            </List>
          </Collapse>
        </List>
     
      
      
      </div>
    </div>
  );
};

export default Orders;
