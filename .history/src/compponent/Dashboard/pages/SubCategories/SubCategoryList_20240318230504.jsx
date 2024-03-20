
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { deleteUsers, setDialog } from "../../../Store/store";
import { useDispatch } from "react-redux";
import Confirm from "../Categories/CategoryForm/Confirm";
const SubCategoryList = (listItems) => {
  const dispatch = useDispatch()
  const drawerWidth = 240;
  const getID = () => {

    dispatch(setDialog(true));
   
  };
  console.log(listItems.data);
  const handleDeleteClick = (id) => {
    dispatch(deleteUsers({ id: id, api: "categories" }));
  };
  const columnss = [

    // { field: "name", headerName: "Name", flex: 2 },
    // {
    //   field: "image",
    //   headerName: "Image",
    //   renderCell: (params) => (
    //     <img src={params.value} className="w-100 h-100 rounded" />
    //   ),
    // },
    // {
    //   field: "category",
    //   headerName: "Categories",
    //   flex: 2,
    //   renderCell: (params) => (
    //     <span  className="w-100 h-100 text-center rounded">{params.row.category !== null ? params.row.category.name :"Null"}</span>
    //   ),
    // },
    // {
    //   field: "actions",
    //   type: "actions",
    //   headerName: "Actions",
    //   flex: 1,
    //   cellClassName: "actions",
    //   getActions: ({ id }) => {
    //     return [
    //       <GridActionsCellItem key={id}
    //         icon={<EditIcon />}
    //         label="Edit"
    //         color="primary"
    //         onClick={() => {
    //           getID(id);
    //         }}
    //       />,
    //       <GridActionsCellItem key={id}
    //         icon={<DeleteIcon />}
    //         label="Delete"
    //         className="text-danger"
    //         color="danger"
    //         onClick={() => {
    //           handleDeleteClick(id);
    //         }}
    //       />,
    //     ];
    //   },
      
    // },
    // {
    //   muiTableBodyCellProps: {
    //     align: "center",
    //   },
    //   muiTableHeadCellProps: {
    //     align: "center",
    //   },
    //   header: "Actions",

    //   Cell: ({ cell }) => (
    //     <Confirm
    //       id={cell}
    //       details={"Do you want to Delete This Category?"}
    //       dispatcher={() =>
    //         dispatch(deleteUsers({ api: "categories", id: cell.row.id }))
    //       }
    //     />
    //   ),
    // },
    { field: "name", headerName: "Name", flex: 2 }
    {
      muiTableBodyCellProps: {
        align: "center",
      },
      muiTableHeadCellProps: {
        align: "center",
      },
      header: "Image",

      Cell: ({ cell }) => (
        <img
          src={cell.row.original.image}
          style={{ maxHeight: "50px" }}
          className="border rounded"
        />
      ),
    },

    {
      accessorKey: "createdAt", //access nested data with dot notation
      header: " createdAt",

      muiTableBodyCellProps: {
        align: "center",
      },
      muiTableHeadCellProps: {
        align: "center",
      },
      Cell: ({ cell }) => (
        <span src={cell.row.original.image} style={{ maxHeight: "50px" }}>
          {new Date(cell.row.original.createdAt).toDateString()}
        </span>
      ),
    },
    {
      accessorKey: "updatedAt", //access nested data with dot notation
      header: " updatedAt",

      muiTableBodyCellProps: {
        align: "center",
      },
      muiTableHeadCellProps: {
        align: "center",
      },
      Cell: ({ cell }) => (
        <span src={cell.row.original.image} style={{ maxHeight: "50px" }}>
          {new Date(cell.row.original.updatedAt).toDateString()}
        </span>
      ),
    },
    {
      muiTableBodyCellProps: {
        align: "center",
      },
      muiTableHeadCellProps: {
        align: "center",
      },
      header: "Actions",

      Cell: ({ cell }) => (
        <Confirm
          id={cell}
          details={"Do you want to Delete This Category?"}
          dispatcher={() =>
            dispatch(deleteUsers({ api: "categories", id: cell.row.id }))
          }
        />
      ),
    },
  ];

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        overflowX: "scroll",
        height: "100%",
      }}
    >
      <DataGrid
        getRowId={(row) => row._id}
        rows={listItems.data}
        columns={columnss}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        rowSelection={false}
      />
    </Box>
  );
};

export default SubCategoryList;
