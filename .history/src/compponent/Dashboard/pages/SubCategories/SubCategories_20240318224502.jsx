import React, { Fragment, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, getData, setDialog } from "../../../Store/store";

import Loading from "../../utils/Loading";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import SubCategoryForm from "./SubCategoryForm";
import SubCategoryList from "./SubCategoryList";
const dashBoardSubCategory = () => {
  const { data, isLoading, isError } = useSelector((state) => state.StoreSlice);
  const dispatch = useDispatch();
  const [id, setid] = useState("");
  const handleDeleteClick = (id) => {
    dispatch(deleteUsers({ id: id, api: "categories" }));
  };
  const getID = (id) => {
    setid(id);
    dispatch(setDialog(true));
  };

  useEffect(() => {
    dispatch(getData("Subcategories"));
  }, [dispatch]);

  return (
    
    <div className="container">
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <div className="w-100 d-flex justify-content-center align-items-center">
          <img className="w-100 h-100" src={error400} />
        </div>
      ) : (
        <div
          className="border w-100 d-flex flex-wrap justify-content-center"
          style={{ marginTop: "100px" }}
        >
          <div className="d-flex col-10  m-auto text-center justify-content-between  align-items-center">
            <Button variant="outlined" onClick={getID}>
              <Add />
              Add SubCategory
            </Button>
            <SubCategoryForm />
            <span className="text-primary fw-bold">SubCategory List 10</span>
          </div>
          <SubCategoryList
            data={data}
            Pinding={isLoading}
            error={isError}
            getID={getID}
          />
        </div>
      )}
    </div>
  );
};
export default dashBoardSubCategory;
