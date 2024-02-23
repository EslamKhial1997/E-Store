import React from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const CategoryRight = () => {
  return (
    <div className="d-flex bg-danger " style={{ height: "100vh" }}>
      <div className="p-2 border d-flex flex-wrap col-12 h-100 justify-content-around">
        <div className="p-2 border col-11 align-self-start">Flex item 2</div>
        <div className="p-2 border align-items-center col-11 align-self-end"> <Stack spacing={2} className="align-self-en">
        
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack></div>
      </div>
    </div>
  );
};

export default CategoryRight;
