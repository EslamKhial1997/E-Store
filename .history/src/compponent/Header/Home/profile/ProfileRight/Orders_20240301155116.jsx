import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

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
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
        <div className="d-flex flex-wrap col-lg-3 col-11 bg-body border p-2 rounded">
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
        <div className="d-flex flex-wrap col-lg-3 col-11 bg-body border p-2 rounded">
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
      </div>
   
    </div>
  );
};

export default Orders;
