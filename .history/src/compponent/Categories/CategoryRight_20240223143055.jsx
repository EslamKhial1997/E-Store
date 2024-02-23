import React from "react";

const CategoryRight = () => {
  return (
    <div className="d-flex bg-danger " style={{ height: "90vh" }}>
      <div className="p-2 border d-flex flex-wrap col-12 h-100 justify-content-around">
        <div className="p-2 border col-11 align-self-start">Flex item 2</div>
        <div className="p-2 border col-11 align-self-end">Flex item 2</div>
      </div>
    </div>
  );
};

export default CategoryRight;
