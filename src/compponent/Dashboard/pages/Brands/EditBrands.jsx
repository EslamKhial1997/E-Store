import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import upload from "../../../image/upload.png";
import Style from "../../Dashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createUsers, editUsers, setDialog } from "../../../Store/store";
import { NavLink, useNavigate } from "react-router-dom";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function EditBrands(id) {
  const initState = {
    name: "",
    api: "brands",
  };
  const [State, setState] = React.useState(initState);
  const [image, setimage] = React.useState("");
  const fromData = (e) => {
    setState((Preve) => ({ ...Preve, [e.target.name]: e.target.value }));
  };
  const selector = useSelector((state) => state.StoreSlice);

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setDialog(false));
  };
  const token = localStorage.getItem("token");

  const submit = async (e) => {
    const data = new FormData();
    data.append("name", State.name);
    data.append("image", image);
    data.append("id", id);
    e.preventDefault();
    data.append("api", State.api);

    if (id === null || id === undefined || id === "") {
      dispatch(createUsers(data));
    } else {
      dispatch(editUsers(data));
    }
  };
  console.log(id);
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={selector.dialog}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {id === null || id === undefined || id=== ""? "Create Brands" : "Edit Brands"}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <form
            className="d-flex flex-wrap justify-content-center card"
            onSubmit={submit}
          >
            <div className="col-12 px-2">
              {" "}
              <input
                type="text"
                id="form12"
                className="w-100 p-2 mt-2 border rounded"
                placeholder="Category Name"
                onChange={fromData}
                name="name"
                value={State.name}
              />
            </div>
            <div className={`${Style.upload} px-2 col-12 pt-3`}>
              {" "}
              <input
                type="file"
                id="upload"
                onChange={(e) => {
                  setimage(e.target.files[0]);
                }}
              />
              <label htmlFor="upload" className="w-100 ">
                <img src={upload} className="w-100 " />
              </label>
            </div>
            <DialogActions>
              <button
                autoFocus
                className="btn btn-primary btn-sm"
                type="submit"
                disabled={
                  token === null || token === "undefined" ? true : false
                }
              >
                Save changes
              </button>
            </DialogActions>
            <NavLink to="/login" className="text-danger text-center m-2">
              {token === null || token === "undefined"
                ? "Please Login First"
                : ""}
            </NavLink>
          </form>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
