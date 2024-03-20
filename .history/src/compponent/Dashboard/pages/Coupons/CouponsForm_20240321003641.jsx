import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { createUsers, editUsers, setDialog } from "../../../Store/store";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import axios from "axios";
import Loading from "../../utils/Loading";
import { useFormik } from "formik";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
const CouponsForm = (id) => {
  const initState = {
    name: "",

    api: "brands",
  };
  const [State, setState] = React.useState(initState);
  const [getDataCat, setGetDataCat] = React.useState([]);
  const [discount, setDiscount] = React.useState("");
  const [expire, setExpire] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    axios
      .get(`http://localhost:8008/api/v1/coupon`)
      .then((e) => {
        setGetDataCat(e.data.data);
      })
      .catch(() => {});
    setAnchorEl(event.currentTarget);
  };
  const handleCloseOption = ({ target }) => {
    setCategory(target.getAttribute("value"));
    setAnchorEl(null);
  };
  const fromData = (e) => {
    setState((Preve) => ({ ...Preve, [e.target.name]: e.target.value }));
  };
  // const selector = useSelector((state) => state.StoreSlice);
  const { isLoading, isError, dialog } = useSelector(
    (state) => state.StoreSlice
  );
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setDialog(false));
  };
  // const submit = (e) => {
  //   const data = new FormData();
  //   data.append("name", State.name);
  //   data.append("expires", expire);
  //   data.append("id", id);
  //   data.append("discount", discount);
  //   data.append("api", State.api);
  //   e.preventDefault();

  //   if (id === null || id === undefined || id === "") {
  //     dispatch(createUsers(data));
  //   } else {
  //     dispatch(editUsers(data));
  //   }
  //   handleClose();
  // };
  const createCategorySchema = Yup.object().shape({
    name: Yup.string()
  
      .min(2, "Category Too Short!")
  
      .max(50, "Category Too Long!")
  
      .required("Category Name Is Required"),
    error: Yup.string(),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      api: "categories",
    },
    validationSchema: createCategorySchema,
    onSubmit: async (values) => {
      await dispatch(createUsers(values))
        .unwrap()
        .then(() => {
          setOpen(true);
        })
        .catch((err) => {
          return (formik.errors.error = err.map((e) => e.msg));
        });
      // : await dispatch(editUsers(values))
      //     .unwrap()
      //     .then(() => {
      //       setOpen(true);
      //     })
      //     .catch((err) => {
      //       return (formik.errors.error = err);
      //     });
    },
  });
  useEffect(() => {}, []);
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={dialog}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {id === null ? "Create New Brand" : "Edit Brand"}
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
            <div className="d-flex align-items-center justify-content-around flex-wrap col-12 mt-2 px-2">
              {" "}
              <div className="col-6">
                {" "}
                <input
                  type="text"
                  id="form12"
                  className="w-100 p-2  border rounded"
                  placeholder="Brand Name"
                  onChange={fromData}
                  name="name"
                  value={State.name}
                />
              </div>
              <div className="col-5 d-flex align-items-center">
                <input
                  type="text"
                  id="form12"
                  className="w-100 p-2  border rounded"
                  placeholder="Discount"
                  onChange={fromData}
                  name="name"
                  value={State.discount}
                />
                <span className="bg-danger p-2 rounded text-light">%</span>
              </div>
              <div className="col-8 d-flex align-items-center p-2">
                <strong>Expires Date</strong>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker />
                </LocalizationProvider>
              </div>
            </div>

            <Loading loading={isLoading} error={isError}>
              <button className="btn btn-primary btn-sm m-2" type="submit">
                Save changes
              </button>
            </Loading>
          </form>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};
export default CouponsForm;
