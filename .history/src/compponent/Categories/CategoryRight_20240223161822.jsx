import React from "react";
import PaginationHome from "../Header/Home/utils/PaginationHome";

const CategoryRight = () => {
  return (
    <div className="d-flex  " style={{ height: "100vh" }}>
      <div className="p-2 border d-flex flex-wrap col-12 h-100 justify-content-around">
        <div className="p-2 border col-11 align-self-start h-100">Flex item 2</div>
        <div className="p-2 border-top border-warning  justify-content-center col-11 align-self-end">
          {" "}
        <PaginationHome/>
        </div>
      </div>
    </div>
  );
};

export default CategoryRight;
